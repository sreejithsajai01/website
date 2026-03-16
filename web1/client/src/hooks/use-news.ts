import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";

export function useNews() {
  return useQuery({
    queryKey: [api.news.list.path],
    queryFn: async () => {
      const res = await fetch(api.news.list.path, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch news");
      const data = await res.json();
      return api.news.list.responses[200].parse(data);
    },
  });
}
