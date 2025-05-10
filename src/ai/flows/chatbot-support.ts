// use server'
'use server';

/**
 * @fileOverview An AI chatbot for answering questions about AdaptAI's services and solutions.
 *
 * - chatbotSupport - A function that handles the chatbot support process.
 * - ChatbotSupportInput - The input type for the chatbotSupport function.
 * - ChatbotSupportOutput - The return type for the chatbotSupport function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ChatbotSupportInputSchema = z.object({
  query: z.string().describe('The user query about AdaptAI services and solutions.'),
});
export type ChatbotSupportInput = z.infer<typeof ChatbotSupportInputSchema>;

const ChatbotSupportOutputSchema = z.object({
  response: z.string().describe('The chatbot response to the user query.'),
});
export type ChatbotSupportOutput = z.infer<typeof ChatbotSupportOutputSchema>;

export async function chatbotSupport(input: ChatbotSupportInput): Promise<ChatbotSupportOutput> {
  return chatbotSupportFlow(input);
}

const prompt = ai.definePrompt({
  name: 'chatbotSupportPrompt',
  input: {schema: ChatbotSupportInputSchema},
  output: {schema: ChatbotSupportOutputSchema},
  prompt: `You are a chatbot designed to answer questions about AdaptAI, a company specializing in adaptive AI solutions for business transformation. Use the following information to answer the query. If the query is not related to AdaptAI, respond that you can only answer questions about AdaptAI.

AdaptAI provides innovative solutions based on adaptive artificial intelligence, designed to improve the lives of individuals and small businesses by offering customized services for daily life management, education, health, and environment. AdaptAI focuses on sustainability and efficiency using advanced and environmentally friendly technologies.

AdaptAI offers customized AI solutions for businesses, including business model analysis, custom solution design, implementation and training, and continuous monitoring and improvement. AdaptAI also develops AI products such as Smart Radio, Job Search Platform, and Real Estate Marketing Applications.

Query: {{{query}}}
`,
});

const chatbotSupportFlow = ai.defineFlow(
  {
    name: 'chatbotSupportFlow',
    inputSchema: ChatbotSupportInputSchema,
    outputSchema: ChatbotSupportOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
