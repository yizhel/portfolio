import { useState, useEffect, useCallback } from 'react'
import { photos, CATEGORIES } from '../data/photos'
import styles from './Velop.module.css'

function Lightbox({ photo, onClose, onPrev, onNext, hasPrev, hasNext }) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft' && hasPrev) onPrev()
      if (e.key === 'ArrowRight' && hasNext) onNext()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, onPrev, onNext, hasPrev, hasNext])

  return (
    <div className={styles.lightboxOverlay} onClick={onClose}>
      <button className={styles.lightboxClose} onClick={onClose} aria-label="Close">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>

      {hasPrev && (
        <button
          className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
          onClick={(e) => { e.stopPropagation(); onPrev() }}
          aria-label="Previous photo"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M13 4l-6 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}

      <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
        <img
          src={photo.url}
          alt={photo.caption || ''}
          className={`${styles.lightboxImg} ${styles[photo.aspect]}`}
        />
        {(photo.caption || photo.location) && (
          <div className={styles.lightboxMeta}>
            {photo.caption && <span className={styles.lightboxCaption}>{photo.caption}</span>}
            {photo.location && <span className={styles.lightboxLocation}>{photo.location}</span>}
          </div>
        )}
      </div>

      {hasNext && (
        <button
          className={`${styles.lightboxNav} ${styles.lightboxNext}`}
          onClick={(e) => { e.stopPropagation(); onNext() }}
          aria-label="Next photo"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
    </div>
  )
}

export default function Velop() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filtered = activeCategory === 'All'
    ? photos
    : photos.filter(p => p.category === activeCategory)

  const openLightbox = useCallback((index) => {
    setLightboxIndex(index)
    document.body.style.overflow = 'hidden'
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null)
    document.body.style.overflow = ''
  }, [])

  const goPrev = useCallback(() => {
    setLightboxIndex(i => (i > 0 ? i - 1 : i))
  }, [])

  const goNext = useCallback(() => {
    setLightboxIndex(i => (i < filtered.length - 1 ? i + 1 : i))
  }, [filtered.length])

  const isEmpty = photos.length === 0
  const noneInCategory = !isEmpty && filtered.length === 0

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.title}>Photography</h1>
        <p className={styles.sub}>A collection of favourite frames.</p>
      </header>

      {!isEmpty && (
        <div className={styles.toolbar}>
          {CATEGORIES.map(c => (
            <button
              key={c}
              className={`${styles.filter} ${activeCategory === c ? styles.filterActive : ''}`}
              onClick={() => setActiveCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>
      )}

      <section className={styles.gallery}>
        {isEmpty && (
          <p className={styles.placeholder}>Photos coming soon.</p>
        )}
        {noneInCategory && (
          <p className={styles.placeholder}>No photos in this category yet.</p>
        )}
        {filtered.map((photo, i) => (
          <button
            key={photo.id}
            className={styles.photoBtn}
            onClick={() => openLightbox(i)}
            aria-label={photo.caption || `Photo ${i + 1}`}
          >
            <img
              src={`${photo.url.replace(/=\w[\w-]*$/, '')}=w800`}
              alt={photo.caption || ''}
              className={styles.photo}
              loading="lazy"
            />
          </button>
        ))}
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          photo={filtered[lightboxIndex]}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
          hasPrev={lightboxIndex > 0}
          hasNext={lightboxIndex < filtered.length - 1}
        />
      )}
    </main>
  )
}
