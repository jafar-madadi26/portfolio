import { withBasePath } from "@/lib/site-values";

export function publicAssetPath(path: string): string {
  return withBasePath(path, process.env.NEXT_PUBLIC_BASE_PATH);
}
