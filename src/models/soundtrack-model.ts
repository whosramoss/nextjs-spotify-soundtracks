import * as z from "zod";

export const SApiSoundtracks = z.object({
  data: z.array(z.string())
})


export type ApiSoundtracks = z.infer<typeof SApiSoundtracks>;
