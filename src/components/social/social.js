import React from 'react';

const Social = () => {
  return (
    <div className="cmp-social">
      <a className="cmp-social__item" href="https://codepen.io/corinneling/">
        <svg className="cmp-social__icon cmp-social__icon--codepen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polygon className="pen" points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
          <line className="pen" x1="12" y1="22" x2="12" y2="15.5"></line>
          <polyline className="pen" points="22 8.5 12 15.5 2 8.5"></polyline>
          <polyline className="pen" points="2 15.5 12 8.5 22 15.5"></polyline>
          <line className="pen" x1="12" y1="2" x2="12" y2="8.5"></line>
        </svg>
      </a>
      <a className="cmp-social__item" href="https://github.com/corinneling">
        <svg className="cmp-social__icon cmp-social__icon--github" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path className="git" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      </a>
      <a className="cmp-social__item" href="mailto:corinnealing@gmail.com">
        <svg className="cmp-social__icon cmp-social__icon--email" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path className="mail" d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline className="mail" points="22,6 12,13 2,6"></polyline>
        </svg>
      </a>
    </div>
  )
}

export default Social;
