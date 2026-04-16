document.addEventListener('DOMContentLoaded', () => {
    // 1. Intersection Observer for slide-up animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // 2. Project Data for Modal
    const projectData = {
        'shopmaster': {
            title: 'ShopMaster',
            tech: ['Next.js', 'TypeScript', 'Prisma', 'Tailwind CSS', 'PostgreSQL', 'NextAuth.js', 'Docker', 'Framer Motion'],
            image: 'photo/shopmaster.png',
            details: `
                <div class="modal-body-text">
                    <h4>Стек (Core)</h4>
                    <ul>
                        <li><strong>Next.js 15.2 (App Router)</strong> — основной фреймворк для SSR и оптимизации.</li>
                        <li><strong>React 19</strong> — библиотека интерфейсов.</li>
                        <li><strong>TypeScript</strong> — строгая типизация для надежности кода.</li>
                    </ul>

                    <h4>База данных и ORM</h4>
                    <ul>
                        <li><strong>Prisma 6</strong> — ORM для работы с базой данных (тип-безопасные запросы).</li>
                        <li><strong>PostgreSQL</strong> — основная реляционная база данных.</li>
                    </ul>

                    <h4>Аутентификация и Безопасность</h4>
                    <ul>
                        <li><strong>NextAuth.js 4.x (с адаптером для Prisma)</strong> — полноценная система входа и сессий.</li>
                        <li><strong>Bcrypt</strong> — хеширование паролей для защиты данных.</li>
                    </ul>

                    <h4>Стилизация и UI</h4>
                    <ul>
                        <li><strong>Tailwind CSS 3.4</strong> — современный служебный CSS-фреймворк.</li>
                        <li><strong>PostCSS / Autoprefixer</strong> — автоматическая обработка CSS.</li>
                        <li><strong>Framer Motion</strong> — продвинутая анимация элементов и переходов.</li>
                        <li><strong>Heroicons</strong> — набор иконок.</li>
                    </ul>

                    <h4>Инструменты разработки</h4>
                    <ul>
                        <li><strong>Vite</strong> — для быстрой сборки (если используется вне Next.js окружения).</li>
                        <li><strong>PostgreSQL Migration</strong> — система миграций Prisma для управления схемой БД.</li>
                        <li><strong>Docker</strong> — контейнеризация для стабильного развёртывания.</li>
                    </ul>
                    <p style="margin-top: 20px; font-size: 0.9rem; opacity: 0.8;">Этот список покрывает фундаментальные части приложения: от фронтенда и анимаций до серверной логики, безопасности и работы с данными.</p>
                </div>
            `,
            github: 'https://github.com/yanakhmetov/shopmaster',
            demo: 'https://shopmaster-beryl.vercel.app'
        },
        'trello-clone': {
            title: 'Trello Clone',
            tech: ['Next.js', 'TypeScript', 'Prisma', 'Tailwind CSS', 'PostgreSQL', 'NextAuth.js', 'Docker', 'DnD-kit'],
            image: 'photo/trello-clone.png',
            details: `
                <div class="modal-body-text">
                    <h4>Стек (Core)</h4>
                    <ul>
                        <li><strong>Next.js 16.2 (Turbo)</strong> — быстрый фреймворк с поддержкой App Router.</li>
                        <li><strong>React 19.x</strong> — актуальная версия библиотеки UI.</li>
                        <li><strong>TypeScript</strong> — типизированный JavaScript для надежной разработки.</li>
                    </ul>

                    <h4>База данных и ORM</h4>
                    <ul>
                        <li><strong>Prisma 6</strong> — эффективная работа с БД (миграции, Studio, типы).</li>
                        <li><strong>PostgreSQL</strong> — масштабируемая реляционная БД.</li>
                    </ul>

                    <h4>Аутентификация и Состояние</h4>
                    <ul>
                        <li><strong>NextAuth.js 5.0 (Beta)</strong> — современная авторизация с поддержкой Edge.</li>
                        <li><strong>TanStack Query</strong> — управление серверным состоянием (кэширование, обновления).</li>
                    </ul>

                    <h4>Интерфейс и Логика</h4>
                    <ul>
                        <li><strong>Dnd-kit</strong> — сложная логика перетаскивания (Drag-and-Drop) для карточек и списков.</li>
                        <li><strong>Tailwind CSS 4.0</strong> — новейшая версия CSS-фреймворка.</li>
                        <li><strong>Lucide React</strong> — современные векторные иконки.</li>
                        <li><strong>Zod / React Hook Form</strong> — строгая валидация схем и управление формами.</li>
                    </ul>

                    <h4>Инфраструктура</h4>
                    <ul>
                        <li><strong>Docker / Compose</strong> — контейнеризация для локальной разработки и деплоя.</li>
                        <li><strong>Railway Deployment</strong> — автоматизированный CI/CD процесс.</li>
                    </ul>
                    <p style="margin-top: 20px; font-size: 0.9rem; opacity: 0.8;">Проект демонстрирует реализацию сложной логики перетаскивания и надежное управление состоянием в реальном времени.</p>
                </div>
            `,
            github: 'https://github.com/yanakhmetov/trello-clone',
            demo: 'https://trello-clone-production-6b27.up.railway.app/'
        },
        'chat-app': {
            title: 'Real-time Chat',
            tech: ['Next.js', 'TypeScript', 'Prisma', 'Tailwind CSS', 'PostgreSQL', 'NextAuth.js', 'Socket.io', 'Express', 'Docker'],
            image: 'photo/сhat-app.png',
            details: `
                <div class="modal-body-text">
                    <h4>Стек (Core)</h4>
                    <ul>
                        <li><strong>Next.js 14 / Express</strong> — гибридная архитектура для веб-приложения и сокет-сервера.</li>
                        <li><strong>Socket.io</strong> — двусторонний обмен данными в реальном времени.</li>
                        <li><strong>TypeScript</strong> — гарантия стабильности типов в мессенджере.</li>
                    </ul>

                    <h4>База данных и Кэширование</h4>
                    <ul>
                        <li><strong>Prisma 6 / PostgreSQL</strong> — хранение истории сообщений и данных пользователей.</li>
                        <li><strong>Redis (ioredis)</strong> — ускорение работы и управление сессиями (опционально).</li>
                    </ul>

                    <h4>Безопасность и Auth</h4>
                    <ul>
                        <li><strong>JWT / Bcryptjs</strong> — защищенная авторизация и шифрование паролей.</li>
                        <li><strong>Zod</strong> — строгая валидация входящих сообщений и схем данных.</li>
                    </ul>

                    <h4>Интерфейс и Стили</h4>
                    <ul>
                        <li><strong>Tailwind CSS 3.4</strong> — адаптивная и быстрая верстка мессенджера.</li>
                        <li><strong>Autoprefixer/PostCSS</strong> — кроссбраузерная совместимость стилей.</li>
                        <li><strong>Lucide Icons</strong> — легкие и современные иконки.</li>
                    </ul>

                    <h4>Деплой и DevOps</h4>
                    <ul>
                        <li><strong>Docker</strong> — изоляция среды для запуска Node.js и баз данных.</li>
                        <li><strong>CI/CD Workflow</strong> — автоматический деплой на Railway платформу.</li>
                    </ul>
                    <p style="margin-top: 20px; font-size: 0.9rem; opacity: 0.8;">Этот чат ориентирован на мгновенную скорость работы и возможность масштабирования через Socket.io серверы.</p>
                </div>
            `,
            github: 'https://github.com/yanakhmetov/chat-app',
            demo: 'https://chat-app-production-9a4b.up.railway.app/'
        },
        'shish-bish': {
            title: 'Shish-Bish',
            tech: ['Next.js', 'TypeScript', 'Prisma', 'Tailwind CSS', 'PostgreSQL', 'NextAuth.js', 'Docker', 'Socket.io', 'Express'],
            image: 'photo/shish-bish.png',
            details: `
                <div class="modal-body-text">
                    <h4>Стек (Core)</h4>
                    <ul>
                        <li><strong>Next.js 15 / Express</strong> — гибридная архитектура для веб-приложения и сокет-сервера.</li>
                        <li><strong>Socket.io</strong> — двусторонний обмен данными в реальном времени.</li>
                        <li><strong>TypeScript</strong> — гарантия стабильности типов в мессенджере.</li>
                    </ul>

                    <h4>База данных и Кэширование</h4>
                    <ul>
                        <li><strong>Prisma 7 / PostgreSQL</strong> — хранение истории сообщений и данных пользователей.</li>
                        <li><strong>Redis (ioredis)</strong> — ускорение работы и управление сессиями (опционально).</li>
                    </ul>

                    <h4>Безопасность и Auth</h4>
                    <ul>
                        <li><strong>JWT / Bcryptjs</strong> — защищенная авторизация и шифрование паролей.</li>
                        <li><strong>Zod</strong> — строгая валидация входящих сообщений и схем данных.</li>
                    </ul>

                    <h4>Интерфейс и Стили</h4>
                    <ul>
                        <li><strong>Tailwind CSS</strong> — адаптивная и быстрая верстка мессенджера.</li>
                        <li><strong>Autoprefixer/PostCSS</strong> — кроссбраузерная совместимость стилей.</li>
                        <li><strong>Lucide Icons</strong> — легкие и современные иконки.</li>
                    </ul>

                    <h4>Деплой и DevOps</h4>
                    <ul>
                        <li><strong>Docker</strong> — изоляция среды для запуска Node.js и баз данных.</li>
                        <li><strong>CI/CD Workflow</strong> — автоматический деплой на Railway платформу.</li>
                    </ul>
                    <p style="margin-top: 20px; font-size: 0.9rem; opacity: 0.8;">Этот чат ориентирован на мгновенную скорость работы и возможность масштабирования через Socket.io серверы.</p>
                </div>
            `,
            github: 'https://github.com/yanakhmetov/ShishBishGame',
            demo: 'https://shishbishgame-production.up.railway.app'
        }
    };

    // 3. Modal Logic
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.querySelector('.close-modal');

    function openModal(projectId) {
        const data = projectData[projectId];
        if (!data) return;

        modalBody.innerHTML = `
            <div class="modal-header">
                <h3>${data.title}</h3>
                <div class="tech-stack">
                    ${data.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                </div>
            </div>
            <div class="modal-img-large">
                <img src="${data.image}" alt="${data.title} Large Screenshot">
            </div>
            ${data.details}
            <div class="modal-footer">
                <a href="${data.github}" target="_blank" class="btn-icon">
                    <i class="fab fa-github"></i>Код на GitHub 
                 </a>
                <a href="${data.demo}" target="_blank" class="btn-icon">
                    <i class="fas fa-external-link-alt"></i>Демо
                </a>
            </div>
        `;

        modal.classList.add('show');
        document.body.classList.add('modal-open');
    }

    function closeModal() {
        modal.classList.remove('show');
        document.body.classList.remove('modal-open');
    }

    // Event Listeners for Project Cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', (e) => {
            // Don't open modal if a link was clicked
            if (e.target.closest('.btn-icon')) return;
            
            const projectId = card.getAttribute('data-project');
            openModal(projectId);
        });
    });

    // Close on click close button
    closeBtn.addEventListener('click', closeModal);

    // Close on click outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close on Escape key
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });
});
