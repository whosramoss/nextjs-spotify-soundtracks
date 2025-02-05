"use client"
import React from "react";
import { useApiFetch } from "@hooks/useApiFetch";
import { ApiSoundtracks } from "@models/soundtrack-model";
import { Section } from "@ui/sections";

export default function Body() {

  const { data, isLoading, error } = useApiFetch<ApiSoundtracks>({
    url: '/api/soundtracks/',
    key: "soundtracks",
  });

  if (error) {
    return (
      <h2 className="py-20 text-xl font-bold text-white">
        Sorry, we were unable to fetch the Soundtracks.
      </h2>
    );
  }

  if (isLoading) {
    return (
      <h2 className="py-20 text-xl font-bold text-white">
        Loading Soundtracks
      </h2>
    );
  }

  return (
    <Section.Soundtrack data={data?.data} />
  );

}
