import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";

export function usePrograms() {
  return useQuery({
    queryKey: [api.programs.list.path],
    queryFn: async () => {
      const res = await fetch(api.programs.list.path, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch programs");
      const data = await res.json();
      return api.programs.list.responses[200].parse(data);
    },
  });
}
