// 'use client';

// import { useState } from 'react';

// export const ProgrammeBtn = () => {
//   const [isExpanded, setIsExpanded] = useState<boolean>(false);

//   const toggleExpand = () => {
//     setIsExpanded(!isExpanded);
//   };

//   const modules = [
//     {
//       id: 1,
//       title: 'Модуль 1: Фундамент',
//       description:
//         'Открой для себя самую перспективную нишу в криптовалютах, в которой сможете самостоятельно зарабатывать приличные деньги',
//     },
//     {
//       id: 2,
//       title: 'Модуль 2: Фундамент',
//       description:
//         'Открой для себя самую перспективную нишу в криптовалютах, в которой сможете самостоятельно зарабатывать приличные деньги',
//     },
//     {
//       id: 3,
//       title: 'Модуль 3: Фундамент',
//       description:
//         'Открой для себя самую перспективную нишу в криптовалютах, в которой сможете самостоятельно зарабатывать приличные деньги',
//     },
//     {
//       id: 4,
//       title: 'Модуль 4: Фундамент',
//       description:
//         'Открой для себя самую перспективную нишу в криптовалютах, в которой сможете самостоятельно зарабатывать приличные деньги',
//     },
//     {
//       id: 5,
//       title: 'Модуль 5: Фундамент',
//       description:
//         'Открой для себя самую перспективную нишу в криптовалютах, в которой сможете самостоятельно зарабатывать приличные деньги',
//     },
//     {
//       id: 6,
//       title: 'Модуль 6: Фундамент',
//       description:
//         'Открой для себя самую перспективную нишу в криптовалютах, в которой сможете самостоятельно зарабатывать приличные деньги',
//     },
//     {
//       id: 7,
//       title: 'Модуль 7: Фундамент',
//       description:
//         'Открой для себя самую перспективную нишу в криптовалютах, в которой сможете самостоятельно зарабатывать приличные деньги',
//     },
//     {
//       id: 8,
//       title: 'Модуль 8: Фундамент',
//       description:
//         'Открой для себя самую перспективную нишу в криптовалютах, в которой сможете самостоятельно зарабатывать приличные деньги',
//     },
//   ];

//   return (
//     <div className="relative">
//       {/* Header with navigation */}
//       <div className="bg-black text-white px-4 py-2 rounded-full mx-4 mt-4 flex justify-between items-center">
//         <div className="text-sm">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit
//         </div>
//       </div>

//       {/* Navigation numbers */}
//       <div className="bg-black text-white flex justify-between items-center px-6 py-2">
//         <div>1</div>
//         <div className="flex items-center space-x-4">
//           <button className="text-white">←</button>
//           <button
//             className="bg-white text-black rounded-full w-6 h-6 flex items-center justify-center"
//             onClick={toggleExpand}
//           >
//             +
//           </button>
//           <button className="text-white">→</button>
//         </div>
//         <div>8</div>
//       </div>

//       {/* Modules list - fixed positioned with scroll */}
//       <div
//         className={`fixed left-0 right-0 z-[100] bg-gray-100 transition-all duration-500 ease-in-out ${
//           isExpanded
//             ? 'opacity-100 visible'
//             : 'opacity-0 invisible pointer-events-none'
//         }`}
//         // style={{
//         //   top: '100px', // Отступ сверху, чтобы не перекрывать верхнюю часть интерфейса
//         //   bottom: '0',
//         //   //   overflowY: 'auto', // Добавляем прокрутку
//         //   boxShadow: isExpanded
//         //     ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
//         //     : 'none',
//         // }}
//       >
//         {modules.map((module, index) => (
//           <div
//             key={module.id}
//             className="bg-white m-4 p-4 rounded-2xl transition-all duration-300 ease-in-out transform"
//             // style={{
//             //   opacity: isExpanded ? 1 : 0,
//             //   transform: isExpanded ? 'translateY(0)' : 'translateY(-20px)',
//             //   transitionDelay: isExpanded
//             //     ? `${index * 100}ms`
//             //     : `${(modules.length - index - 1) * 50}ms`,
//             // }}
//           >
//             <h2 className="font-bold text-xl mb-2">{module.title}</h2>
//             <p className="text-sm mb-4">{module.description}</p>
//             <div>
//               <p className="text-sm mb-2">Что будем изучать и делать:</p>
//               <div className="flex flex-wrap gap-2">
//                 <button className="bg-black text-white text-xs px-3 py-2 rounded-full">
//                   Apps Development
//                 </button>
//                 <button className="bg-black text-white text-xs px-3 py-2 rounded-full">
//                   SEO Services
//                 </button>
//                 <button className="bg-black text-white text-xs px-3 py-2 rounded-full">
//                   Data Analysis
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}

//         {/* Collapse button */}
//         <div className="bg-white m-4 p-3 rounded-full text-center">
//           <button onClick={() => setIsExpanded(false)} className="font-medium">
//             Згорнути
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// 'use client';

// import { useState } from 'react';

// export const ProgrammeBtn = () => {
//   const [isExpanded, setIsExpanded] = useState(true);

//   const toggleExpand = () => {
//     setIsExpanded(!isExpanded);
//   };

//   const modules = [
//     {
//       id: 1,
//       title: 'Модуль 1: Фундамент',
//       description:
//         'Открой для себя самую перспективную нишу в криптовалютах, в которой сможете самостоятельно зарабатывать приличные деньги',
//     },
//     {
//       id: 2,
//       title: 'Модуль 2: Фундамент',
//       description:
//         'Открой для себя самую перспективную нишу в криптовалютах, в которой сможете самостоятельно зарабатывать приличные деньги',
//     },
//     {
//       id: 3,
//       title: 'Модуль 3: Фундамент',
//       description:
//         'Открой для себя самую перспективную нишу в криптовалютах, в которой сможете самостоятельно зарабатывать приличные деньги',
//     },
//     {
//       id: 4,
//       title: 'Модуль 4: Фундамент',
//       description:
//         'Открой для себя самую перспективную нишу в криптовалютах, в которой сможете самостоятельно зарабатывать приличные деньги',
//     },
//     {
//       id: 5,
//       title: 'Модуль 5: Фундамент',
//       description:
//         'Открой для себя самую перспективную нишу в криптовалютах, в которой сможете самостоятельно зарабатывать приличные деньги',
//     },
//     {
//       id: 6,
//       title: 'Модуль 6: Фундамент',
//       description:
//         'Открой для себя самую перспективную нишу в криптовалютах, в которой сможете самостоятельно зарабатывать приличные деньги',
//     },
//     {
//       id: 7,
//       title: 'Модуль 7: Фундамент',
//       description:
//         'Открой для себя самую перспективную нишу в криптовалютах, в которой сможете самостоятельно зарабатывать приличные деньги',
//     },
//     {
//       id: 8,
//       title: 'Модуль 8: Фундамент',
//       description:
//         'Открой для себя самую перспективную нишу в криптовалютах, в которой сможете самостоятельно зарабатывать приличные деньги',
//     },
//   ];

//   return (
//     <div className="max-w-md mx-auto bg-gray-100 rounded-3xl relative">
//       {/* Header with navigation */}
//       <div className="bg-black text-white px-4 py-2 rounded-full mx-4 mt-4 flex justify-between items-center">
//         <div className="text-sm">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit
//         </div>
//       </div>

//       {/* Navigation numbers */}
//       <div className="bg-black text-white flex justify-between items-center px-6 py-2">
//         <div>1</div>
//         <div className="flex items-center space-x-4">
//           <button className="text-white">←</button>
//           <button
//             className="bg-white text-black rounded-full w-6 h-6 flex items-center justify-center"
//             onClick={toggleExpand}
//           >
//             +
//           </button>
//           <button className="text-white">→</button>
//         </div>
//         <div>8</div>
//       </div>

//       {/* Modules list */}
//       <div className={`transition-all duration-300 absolute top-20 `}>
//         {modules.map((module) => (
//           <div key={module.id} className="bg-white m-4 p-4 rounded-2xl">
//             <h2 className="font-bold text-xl mb-2">{module.title}</h2>
//             <p className="text-sm mb-4">{module.description}</p>
//             <div>
//               <p className="text-sm mb-2">Что будем изучать и делать:</p>
//               <div className="flex space-x-2">
//                 <button className="bg-black text-white text-xs px-3 py-2 rounded-full">
//                   Apps Development
//                 </button>
//                 <button className="bg-black text-white text-xs px-3 py-2 rounded-full">
//                   SEO Services
//                 </button>
//                 <button className="bg-black text-white text-xs px-3 py-2 rounded-full">
//                   Data Analysis
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Collapse button */}
//       <div className="bg-white m-4 p-3 rounded-full text-center">
//         <button
//           onClick={() => setIsExpanded(false)}
//           className={`font-medium ${!isExpanded ? 'hidden' : ''}`}
//         >
//           Згорнути
//         </button>
//       </div>
//     </div>
//   );
// };

'use client';

import { useState } from 'react';

export const ProgrammeBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Функция для переключения видимости списка
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Данные для списка
  const items = [
    {
      id: 1,
      label: 'Модуль 1: Фундамент',
      services: ['Apps Development', 'SEO Services', 'Data Analysis'],
    },
    {
      id: 2,
      label: 'Модуль 2: Фундамент',
      services: ['Apps Development', 'SEO Services', 'Data Analysis'],
    },
    {
      id: 3,
      label: 'Модуль 3: Фундамент',
      services: ['Apps Development', 'SEO Services', 'Data Analysis'],
    },
    {
      id: 4,
      label: 'Модуль 4: Фундамент',
      services: ['Apps Development', 'SEO Services', 'Data Analysis'],
    },
    {
      id: 5,
      label: 'Модуль 5: Фундамент',
      services: ['Apps Development', 'SEO Services', 'Data Analysis'],
    },
    {
      id: 6,
      label: 'Модуль 6: Фундамент',
      services: ['Apps Development', 'SEO Services', 'Data Analysis'],
    },
    {
      id: 7,
      label: 'Модуль 7: Фундамент',
      services: ['Apps Development', 'SEO Services', 'Data Analysis'],
    },
    {
      id: 8,
      label: 'Модуль 8: Фундамент',
      services: ['Apps Development', 'SEO Services', 'Data Analysis'],
    },
  ];

  return (
    <div className="">
      {/* Кнопка "+" */}
      <button
        onClick={toggleDropdown}
        className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl cursor-pointer hover:bg-blue-700 transition-colors duration-300"
      >
        {isOpen ? '−' : '+'}
      </button>

      {/* Выпадающий список (сверху) */}
      {isOpen && (
        <div className="absolute left-0 bg-white border border-gray-200 rounded-lg shadow-lg z-120  p-4 !overflow-hidden">
          {items.map((item) => (
            <div
              key={item.id}
              className="py-4 border-b border-gray-100 last:border-b-0"
            >
              <h3 className="text-lg text-gray-800">{item.label}</h3>
              <p className="text-sm text-gray-600 mt-1">
                Описание для себя: самопереживание и криптоактивы, в которых
                себе самозанятый запрашивает прибыль через обучение и
                деятельность:
              </p>
              <div className="flex gap-2 mt-2 flex-wrap">
                {item.services.map((service, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
