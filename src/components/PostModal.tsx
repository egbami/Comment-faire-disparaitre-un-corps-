import { motion, AnimatePresence } from 'framer-motion'
import { X, MessageSquare, User } from 'lucide-react'
import type { Chapter } from '../types'
import { useComments } from '../hooks/useJsonPlaceholder'

interface PostModalProps {
  chapter: Chapter | null
  postId: number | null
  onClose: () => void
}

export default function PostModal({ chapter, postId, onClose }: PostModalProps) {
  const { comments, loading } = useComments(postId)

  return (
    <AnimatePresence>
      {chapter && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            className="fixed inset-4 md:inset-8 lg:inset-16 z-50 bg-[#0a0a0a] border border-primary/10 rounded-2xl md:rounded-3xl overflow-hidden flex flex-col"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Header */}
            <div className="flex items-start justify-between p-6 md:p-10 border-b border-primary/10 flex-shrink-0">
              <div>
                <p className="text-primary/40 text-[10px] tracking-widest uppercase mb-2">
                  {chapter.number} — {chapter.tag}
                </p>
                <h2
                  className="text-2xl sm:text-3xl md:text-4xl font-medium leading-tight"
                  style={{ color: '#E1E0CC' }}
                >
                  {chapter.title}
                </h2>
                <p className="text-primary/50 text-sm mt-1 font-serif italic">
                  {chapter.subtitle}
                </p>
              </div>
              <button
                onClick={onClose}
                className="flex-shrink-0 w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-primary/60 hover:text-primary hover:border-primary/60 transition-all ml-4"
              >
                <X size={18} />
              </button>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-6 md:p-10 max-w-3xl">

                {/* Body paragraphs */}
                <div className="space-y-5 mb-10">
                  {chapter.body.map((para, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="text-primary/80 text-sm md:text-base leading-[1.8]"
                    >
                      {para}
                    </motion.p>
                  ))}
                </div>

                {/* Fact highlight */}
                {chapter.fact && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="border-l-2 border-primary/60 pl-5 py-3 bg-primary/5 rounded-r-xl mb-10"
                  >
                    <p className="text-[10px] text-primary/40 uppercase tracking-widest mb-1">Chiffre-clé</p>
                    <p className="text-primary text-sm md:text-base font-medium leading-[1.6]">{chapter.fact}</p>
                  </motion.div>
                )}

                {/* Divider */}
                <div className="border-t border-primary/10 mb-8" />

                {/* Comments section */}
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <MessageSquare size={14} className="text-primary/40" />
                    <p className="text-primary/40 text-xs uppercase tracking-widest">
                      Réactions des lecteurs — JSONPlaceholder API
                    </p>
                  </div>

                  {loading ? (
                    <div className="space-y-4">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="animate-pulse">
                          <div className="h-3 bg-primary/10 rounded w-1/3 mb-2" />
                          <div className="h-2 bg-primary/5 rounded w-full mb-1" />
                          <div className="h-2 bg-primary/5 rounded w-4/5" />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {comments.map((comment, i) => (
                        <motion.div
                          key={comment.id}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.05 * i }}
                          className="group"
                        >
                          <div className="flex items-center gap-2 mb-1.5">
                            <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                              <User size={10} className="text-primary/40" />
                            </div>
                            <p className="text-primary/60 text-xs font-medium">{comment.email}</p>
                          </div>
                          <p className="text-primary/30 text-[10px] italic mb-1 pl-8 capitalize">{comment.name}</p>
                          <p className="text-primary/50 text-xs leading-[1.7] pl-8">{comment.body}</p>
                          {i < comments.length - 1 && (
                            <div className="border-b border-primary/5 mt-5" />
                          )}
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
