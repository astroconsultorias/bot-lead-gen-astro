import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_contact_info",
  title: "Get contact info",
  description: "Return the contact channels for Astro Consultoria (WhatsApp, email, site).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const info = {
      company: "Astro Consultoria",
      whatsapp: "+55 51 98152-0555",
      whatsapp_link: "https://wa.me/5551981520555",
      email: "astroconsultorias@gmail.com",
      site: "https://astroconsultorias.com.br",
    };
    return {
      content: [{ type: "text", text: JSON.stringify(info, null, 2) }],
      structuredContent: info,
    };
  },
});
