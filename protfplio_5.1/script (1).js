/* ═══════════════════════════════════════════════════════
   PORTFOLIO DATA — Edit this file to manage projects
   ═══════════════════════════════════════════════════════

   HOW TO ADD A NEW PROJECT:
   1. Add it to the right section array (dataAI or engineering)
   2. Give it a unique id
   3. That's it! The card and modal are created automatically.

   HOW TO CHANGE BEST PROJECTS:
   Change the 3 ids in the bestIds array below.
═══════════════════════════════════════════════════════ */

const PORTFOLIO = {

  // ── Which 3 projects show in "Best Projects"? ──────────
  // Put any 3 ids from dataAI or engineering below
  bestIds: ['eng-3', 'eng-1', 'data-2'],

  // ── Data Analysis & AI Projects ───────────────────────
  dataAI: [
    {
      id: 'data-1',
      title: 'Dashboard Project',
      desc: 'An interactive business intelligence dashboard built with SQL for data extraction and Power BI for visualization.',
      img: 'data1.jpg',
      tags: ['SQL', 'Power BI'],
      codeLinks: [
        { label: 'SQL Code', url: 'https://github.com/YOUR_USERNAME/dashboard-sql' }
      ],
      liveUrl: 'https://your-dashboard-link.com'
    },
    {
      id: 'data-2',
      title: 'AI Project',
      desc: 'Machine learning model built with Python. Describe the objective, dataset, and results here.',
      img: 'data2.jpg',
      tags: ['Python', 'AI'],
      codeLinks: [
        { label: 'Python Code', url: 'https://github.com/YOUR_USERNAME/ai-project' }
      ],
      liveUrl: ''
    },
    {
      id: 'data-3',
      title: 'Data Project',
      desc: 'Data analysis and visualization project. Replace with your real description.',
      img: 'data3.jpg',
      tags: ['Python', 'SQL'],
      codeLinks: [
        { label: 'Python Code', url: 'https://github.com/YOUR_USERNAME/data-project' },
        { label: 'SQL Code',    url: 'https://github.com/YOUR_USERNAME/data-project-sql' }
      ],
      liveUrl: ''
    }
    // ↓ ADD NEW DATA/AI PROJECT HERE ↓
    // {
    //   id: 'data-4',
    //   title: 'My New Project',
    //   desc: 'Description here.',
    //   img: 'data4.jpg',
    //   tags: ['Python'],
    //   codeLinks: [{ label: 'Python Code', url: 'https://github.com/...' }],
    //   liveUrl: ''
    // }
  ],

  // ── Engineering Projects ───────────────────────────────
  engineering: [
    {
      id: 'eng-1',
      title: 'Robot Project',
      desc: 'An autonomous robotics system programmed in Python. Describe the objective, components, and outcomes here.',
      img: 'eng1.jpg',
      tags: ['Python'],
      codeLinks: [
        { label: 'Python Code', url: 'https://github.com/YOUR_USERNAME/robot-project' }
      ],
      liveUrl: ''
    },
    {
      id: 'eng-2',
      title: 'Engineering Project 2',
      desc: 'Replace this with your real description of the project.',
      img: 'eng2.jpg',
      tags: ['CAD'],
      codeLinks: [
        { label: 'View Files', url: 'https://github.com/YOUR_USERNAME/eng2' }
      ],
      liveUrl: ''
    },
    {
      id: 'eng-3',
      title: 'MIYAHSPHERE',
      desc: 'A smart spherical inspection device designed to detect pipeline leaks and structural issues using advanced sensors, improving reliability and reducing maintenance costs.',
      img: 'miyahsphere_fixed.png',
      tags: ['Web'],
      codeLinks: [
        { label: 'View web', url: 'https://mohammaddabbas7.github.io/MiyahSphere/' }
      ],
      liveUrl: ''
    },
    {
      id: 'eng-4',
      title: 'Engineering Project 4',
      desc: 'Replace this with your real description of the project.',
      img: 'eng4.jpg',
      tags: ['Python'],
      codeLinks: [
        { label: 'Python Code', url: 'https://github.com/YOUR_USERNAME/eng4' }
      ],
      liveUrl: ''
    }
    // ↓ ADD NEW ENGINEERING PROJECT HERE ↓
    // {
    //   id: 'eng-5',
    //   title: 'My New Engineering Project',
    //   desc: 'Description here.',
    //   img: 'eng5.jpg',
    //   tags: ['Python'],
    //   codeLinks: [{ label: 'Python Code', url: 'https://github.com/...' }],
    //   liveUrl: ''
    // }
  ]
};

/* ═══════════════════════════════════════════════════════
   CARD & MODAL BUILDER — No need to edit below this line
═══════════════════════════════════════════════════════ */

function buildCard(project) {
  const card = document.createElement('div');
  card.className = 'card';
  card.onclick = () => openModal('modal-' + project.id);

  const tagsHTML = project.tags.map(t => `<span class="tag">${t}</span>`).join('');

  card.innerHTML = `
    <div class="card-img-wrap">
      <img src="${project.img}" alt="${project.title}"
           onerror="this.parentElement.classList.add('no-img')">
    </div>
    <div class="card-body">
      <h3>${project.title}</h3>
      <p>${project.desc}</p>
      <div class="card-tags">${tagsHTML}</div>
    </div>
  `;
  return card;
}

function buildModal(project) {
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.id = 'modal-' + project.id;
  modal.onclick = (e) => closeModalOutside(e);

  const tagsHTML = project.tags.map(t => `<span class="tag">${t}</span>`).join('');

  const codeLinksHTML = project.codeLinks.map(l =>
    `<a href="${l.url}" target="_blank" class="modal-btn btn-code"><span>⌨</span> ${l.label}</a>`
  ).join('');

  const liveBtn = project.liveUrl
    ? `<a href="${project.liveUrl}" target="_blank" class="modal-btn btn-web"><span>🌐</span> Live Project</a>`
    : '';

  modal.innerHTML = `
    <div class="modal">
      <button class="modal-close" onclick="closeModal('modal-${project.id}')">&#10005;</button>
      <div class="modal-img-wrap">
        <img src="${project.img}" alt="${project.title}"
             onerror="this.parentElement.classList.add('no-img')">
      </div>
      <div class="modal-body">
        <h2>${project.title}</h2>
        <p class="modal-desc">${project.desc}</p>
        <div class="modal-tags">${tagsHTML}</div>
        <div class="modal-links">${codeLinksHTML}${liveBtn}</div>
      </div>
    </div>
  `;
  return modal;
}

const PREVIEW_LIMIT = 5; // show all if ≤ this number, otherwise show last 3

function renderSection(projects, containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error("Container not found:", containerId);
    return;
  }
  const total = projects.length;
  const collapsed = total > PREVIEW_LIMIT;
  const visibleProjects = collapsed ? projects.slice(-3) : projects;

  // Build all modals first
  projects.forEach(p => {
    if (!document.getElementById('modal-' + p.id)) {
      document.body.appendChild(buildModal(p));
    }
  });

  // Build visible cards
  visibleProjects.forEach((p) => {
    container.appendChild(buildCard(p));
  });

  // If collapsed, add "Show All X Projects" button
  if (collapsed) {
    const btnWrap = document.createElement('div');
    btnWrap.className = 'show-all-wrap';
    btnWrap.id = containerId + '-btnwrap';

    const btn = document.createElement('button');
    btn.className = 'show-all-btn';
    btn.innerHTML = `Show All ${total} Projects ↓`;
    btn.onclick = () => {
      // Remove last-3 cards
      container.innerHTML = '';
      btnWrap.remove();
      // Render all cards
      projects.forEach((p) => {
        container.appendChild(buildCard(p));
      });
    };

    btnWrap.appendChild(btn);
    container.parentElement.appendChild(btnWrap);
  }
}

function renderAll() {
  const allProjects = {};
  [...PORTFOLIO.dataAI, ...PORTFOLIO.engineering].forEach(p => {
    allProjects[p.id] = p;
  });

  // ── Best Projects (always show all 3) ────────────────
  const bestContainer = document.getElementById('best-cards');
  if (!bestContainer) {
    console.error("Container not found: best-cards");
  } else {
  PORTFOLIO.bestIds.forEach(id => {
    const p = allProjects[id];
    if (!p) return;
    bestContainer.appendChild(buildCard(p));
    if (!document.getElementById('modal-' + p.id)) {
      document.body.appendChild(buildModal(p));
    }
  });
  }

  // ── Data & AI ─────────────────────────────────────────
  renderSection(PORTFOLIO.dataAI, 'data-cards');

  // ── Engineering ───────────────────────────────────────
  renderSection(PORTFOLIO.engineering, 'eng-cards');
}

/* ═══════════════════════════════════════════════════════
   MODAL CONTROLS
═══════════════════════════════════════════════════════ */
function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

function closeModalOutside(event) {
  if (event.target === event.currentTarget) {
    event.currentTarget.classList.remove('open');
    document.body.style.overflow = '';
  }
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.open').forEach(m => {
      m.classList.remove('open');
      document.body.style.overflow = '';
    });
  }
});

/* ═══════════════════════════════════════════════════════
   NAV & SCROLL
═══════════════════════════════════════════════════════ */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

const sections = document.querySelectorAll('.snap-section');
const navLinks  = document.querySelectorAll('nav ul li a');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${id}`));
    }
  });
}, { threshold: 0.5 });

sections.forEach(s => sectionObserver.observe(s));

const menuToggle = document.getElementById('menuToggle');
const navMenu    = document.getElementById('navMenu');

menuToggle?.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  menuToggle.innerHTML = isOpen ? '&#10005;' : '&#9776;';
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    menuToggle.innerHTML = '&#9776;';
  });
});

/* ── Run everything ── */
renderAll();
console.log('Portfolio ready 🚀 — Mohammad Dabbas');
