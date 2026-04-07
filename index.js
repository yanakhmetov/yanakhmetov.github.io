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
            tech: ['Next.js', 'TypeScript', 'Prisma', 'Tailwind CSS', 'PostgreSQL', 'NextAuth.js', 'Framer Motion'],
            description: 'Инновационная e-commerce платформа с премиальным дизайном.',
            details: `
                <h4>О проекте</h4>
                <p>ShopMaster — это полноценное решение для интернет-коммерции, объединяющее эстетику Glassmorphism и мощный функционал.</p>
                <h4>Ключевые особенности</h4>
                <ul>
                    <li>Безопасная авторизация через NextAuth.js (Google и учетные данные).</li>
                    <li>Полный цикл покупки: каталог, корзина, оформление заказа.</li>
                    <li>Типизированная работа с БД PostgreSQL через Prisma ORM.</li>
                    <li>Плавные анимации интерфейса с помощью Framer Motion.</li>
                    <li>Адаптивный дизайн, идеально работающий на всех устройствах.</li>
                </ul>
            `,
            github: 'https://github.com/yanakhmetov/shopmaster',
            demo: 'https://shopmaster-beryl.vercel.app'
        },
        'trello-clone': {
            title: 'Trello Clone',
            tech: ['Next.js', 'TypeScript', 'Prisma', 'Tailwind CSS', 'PostgreSQL', 'NextAuth.js', 'DnD-kit'],
            description: 'Система управления задачами с интерактивным Drag-and-Drop.',
            details: `
                <h4>О проекте</h4>
                <p>Высокофункциональный клон Trello для организации рабочего процесса и управления проектами.</p>
                <h4>Ключевые особенности</h4>
                <ul>
                    <li>Интуитивный Drag-and-Drop интерфейс для карточек и колонок.</li>
                    <li>Создание неограниченного количества досок и списков задач.</li>
                    <li>Редактирование описаний, меток и статусов в реальном времени.</li>
                    <li>Оптимизированное состояние приложения с помощью TanStack Query.</li>
                    <li>Валидация форм и схем данных с использованием Zod и React Hook Form.</li>
                </ul>
            `,
            github: 'https://github.com/yanakhmetov/trello-clone',
            demo: 'https://trello-clone-production-6b27.up.railway.app/'
        },
        'chat-app': {
            title: 'Real-time Chat',
            tech: ['Next.js', 'TypeScript', 'Prisma', 'Tailwind CSS', 'PostgreSQL', 'NextAuth.js', 'Socket.io', 'Express'],
            description: 'Мессенджер реального времени для мгновенного общения.',
            details: `
                <h4>О проекте</h4>
                <p>Современный чат, обеспечивающий мгновенный обмен сообщениями и статусами между пользователями.</p>
                <h4>Ключевые особенности</h4>
                <ul>
                    <li>Двусторонняя связь в реальном времени с использованием Socket.io.</li>
                    <li>Поддержка приватных диалогов и групповых комнат.</li>
                    <li>Индикаторы "печатает..." и статусы прочтения сообщений.</li>
                    <li>Сохранение истории переписки в базе данных.</li>
                    <li>Быстрый и отзывчивый интерфейс, оптимизированный под мобильные устройства.</li>
                </ul>
            `,
            github: 'https://github.com/yanakhmetov/chat-app',
            demo: 'https://chat-app-production-9a4b.up.railway.app/'
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
            <div class="modal-body-text">
                ${data.details}
            </div>
            <div class="modal-footer">
                <a href="${data.github}" target="_blank" class="btn-icon">
                    <i class="fab fa-github"></i> Исходный код
                </a>
                <a href="${data.demo}" target="_blank" class="btn-icon">
                    <i class="fas fa-external-link-alt"></i> Живое демо
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
