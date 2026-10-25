export default {
  async fetch(request) {
    if (request.method === "GET") {
      return new Response("CampusFood API is online!", {
        headers: { "Content-Type": "text/plain" }
      });
    }

    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405 });
    }

    try {
      const order = await request.json();

      if (!order.items || !Array.isArray(order.items)) {
        return new Response(
          JSON.stringify({ error: "Invalid order" }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }

      return new Response(
        JSON.stringify({
          success: true,
          message: "Order received"
        }),
        { headers: { "Content-Type": "application/json" } }
      );
    } catch {
      return new Response(
        JSON.stringify({ error: "Invalid JSON" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
  }
};
