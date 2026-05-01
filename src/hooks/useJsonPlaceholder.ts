import { useState, useEffect } from 'react'
import type { Post, Comment, User } from '../types'

const BASE = 'https://jsonplaceholder.typicode.com'

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${BASE}/posts?_limit=12`)
      .then(r => r.json())
      .then(data => { setPosts(data); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  return { posts, loading }
}

export function useComments(postId: number | null) {
  const [comments, setComments] = useState<Comment[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!postId) return
    setLoading(true)
    fetch(`${BASE}/posts/${postId}/comments`)
      .then(r => r.json())
      .then(data => { setComments(data); setLoading(false) })
      .catch(() => setLoading(false))
  }, [postId])

  return { comments, loading }
}

export function useUser(userId: number | null) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    if (!userId) return
    fetch(`${BASE}/users/${userId}`)
      .then(r => r.json())
      .then(setUser)
      .catch(() => {})
  }, [userId])

  return user
}
