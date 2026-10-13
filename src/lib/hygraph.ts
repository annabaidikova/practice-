export async function hygraphRequest<T>(
  query: string,
  variables: Record<string, unknown> = {}
): Promise<T>  {
  const response = await fetch(process.env.HYGRAPH_ENDPOINT!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    throw new Error(`Hygraph error: ${response.status}`);
  }

  const result = await response.json();

if (result.errors?.length) {
  throw new Error(result.errors[0].message);
}

  return result.data as T;
}

