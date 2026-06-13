const OWNER_PHONE = '919263975506';

export function formatOrderMessage(cartItems, customerInfo) {
  const itemLines = cartItems
    .map(
      (item) =>
        `• ${item.quantity}x ${item.name} — ₹${item.price * item.quantity}`
    )
    .join('\n');

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const message = `🍽️ *New Order — Cafe 007*
━━━━━━━━━━━━━━━━━━
👤 *Name:* ${customerInfo.name}
📱 *Phone:* ${customerInfo.phone}
📍 *Address:* ${customerInfo.address}

🛒 *Order Items:*
${itemLines}

💰 *Total: ₹${total}*
${customerInfo.notes ? `\n📝 *Note:* ${customerInfo.notes}` : ''}
━━━━━━━━━━━━━━━━━━
📍 _Cafe-007, Tarapur, Munger_`;

  return message;
}

export function sendToWhatsApp(cartItems, customerInfo) {
  const message = formatOrderMessage(cartItems, customerInfo);
  const encoded = encodeURIComponent(message);
  const url = `https://wa.me/${OWNER_PHONE}?text=${encoded}`;
  window.open(url, '_blank');
}
