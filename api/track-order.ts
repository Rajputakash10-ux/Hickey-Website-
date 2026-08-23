import type { VercelRequest, VercelResponse } from '@vercel/node';

const DOMAIN = '2t2ym7-dv.myshopify.com';
const ADMIN_TOKEN = process.env.SHOPIFY_ADMIN_TOKEN!;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const { order_number, email } = req.query;
  if (!order_number || !email) return res.status(400).json({ error: 'Missing order_number or email' });

  try {
    const response = await fetch(
      `https://${DOMAIN}/admin/api/2026-07/orders.json?name=%23${order_number}&status=any`,
      {
        headers: {
          'X-Shopify-Access-Token': ADMIN_TOKEN,
          'Content-Type': 'application/json',
        },
      }
    );

    const data = await response.json();
    const order = data.orders?.find(
      (o: { email: string }) => o.email?.toLowerCase() === (email as string).toLowerCase()
    );

    if (!order) return res.status(404).json({ error: 'Order not found' });

    res.status(200).json({
      orderNumber: order.name,
      createdAt: order.created_at,
      financialStatus: order.financial_status,
      fulfillmentStatus: order.fulfillment_status,
      totalPrice: order.total_price,
      currency: order.currency,
      lineItems: order.line_items.map((item: { title: string; quantity: number; price: string }) => ({
        title: item.title,
        quantity: item.quantity,
        price: item.price,
      })),
      shippingAddress: order.shipping_address
        ? {
            name: order.shipping_address.name,
            city: order.shipping_address.city,
            province: order.shipping_address.province,
            country: order.shipping_address.country,
          }
        : null,
      fulfillments: order.fulfillments?.map((f: { tracking_company: string; tracking_number: string; tracking_url: string; status: string }) => ({
        trackingCompany: f.tracking_company,
        trackingNumber: f.tracking_number,
        trackingUrl: f.tracking_url,
        status: f.status,
      })) ?? [],
    });
  } catch {
    res.status(500).json({ error: 'Failed to fetch order' });
  }
}
