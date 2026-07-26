import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const services = [
  {
    category: "Consultoria, diagnóstico e organização empresarial",
    items: [
      { name: "Raio-X de Gargalos Operacionais", price: "A partir de R$ 600" },
      { name: "Organização Comercial e Atendimento", price: "A partir de R$ 1.800" },
      { name: "Mapeamento de Processos", price: "A partir de R$ 1.500" },
      { name: "Estruturação de Equipes e Rotinas", price: "A partir de R$ 1.500" },
      { name: "Implantação de Melhorias Operacionais", price: "A partir de R$ 1.800" },
    ],
  },
  {
    category: "Presença digital",
    items: [
      { name: "Google Essencial", price: "R$ 300" },
      { name: "Página Expressa", price: "R$ 500" },
      { name: "Kit Presença Local", price: "R$ 800" },
      { name: "Estrutura Digital de Entrada", price: "A partir de R$ 600" },
      { name: "Ajustes Estratégicos de Apresentação", price: "A partir de R$ 400" },
    ],
  },
];

export default defineTool({
  name: "list_services",
  title: "List services",
  description: "List the services and prices offered by Astro Consultoria.",
  inputSchema: {
    category: z
      .enum(["all", "consulting", "digital"])
      .optional()
      .describe("Filter by category. Defaults to 'all'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category }) => {
    const filtered =
      category === "consulting"
        ? [services[0]]
        : category === "digital"
        ? [services[1]]
        : services;
    return {
      content: [{ type: "text", text: JSON.stringify(filtered, null, 2) }],
      structuredContent: { categories: filtered },
    };
  },
});
