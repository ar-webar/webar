import Link from 'next/link'
import React from 'react'
import styles from './index.module.scss';

const Pages = () => {
  const data = {
    pages: [
      {
        name: 'Хоружая',
        path: '/verakhoruzhaya'
      },
      {
        name: 'Олешев',
        path: '/oleshev'
      },
      {
        name: 'Мирошниченко',
        path: '/miroshnichenko'
      },
      {
        name: 'Лукьянович',
        path: '/lukyanovich'
      },
      {
        name: 'Кульман',
        path: 'kulman'
      },
      {
        name: 'Козлов',
        path: '/kozlov'
      },
      {
        name: 'Беда',
        path: '/beda'
      }

    ]
  }

  return (
    <div className={styles.ul}>
      {data.pages.map((page, index) => (
        <div key={index}>
          <Link href={page.path} className={styles.link}>
            {/* ·  */}
            {page.name}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Pages


