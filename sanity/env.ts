export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-18'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)
export const  token = assertValue(
  "skLr0Kbb2QoY8oLAwP2klLOixMZYrrYouPQSlrTHHkWyAVdsrvVaoaGmjigSql1rB97We7XZdXiesbV83OFbfgQ9HvWjNnT7bzV5HBfWHCh9LazZ2RDyiWE8HPZJQTSsT9kDBwFX9CENe6rQBVXejF4FIOAi6DzpGRhRdn0hVVaghiqoXgFj",
  'Missing environment variable: SANITY_API_TOKEN'

)


function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
