//NOTE - to delete
// // components/dashboard/table/TableHeader.tsx
// import { flexRender, type HeaderGroup } from '@tanstack/react-table';

// type TableHeaderProps<T> = {
//   headerGroups: HeaderGroup<T>[];
// };

// export function TableHeader<T>({ headerGroups }: TableHeaderProps<T>) {
//   return (
//     <thead className="bg-gray-50 border-b">
//       {headerGroups.map((headerGroup) => (
//         <tr key={headerGroup.id}>
//           {headerGroup.headers.map((header) => (
//             <th
//               key={header.id}
//               className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider"
//             >
//               {header.isPlaceholder
//                 ? null
//                 : flexRender(
//                     header.column.columnDef.header,
//                     header.getContext(),
//                   )}
//             </th>
//           ))}
//         </tr>
//       ))}
//     </thead>
//   );
// }
