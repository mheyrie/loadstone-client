// components/dashboard/table/Tableabody.tsx
import { flexRender, type Row } from '@tanstack/react-table';

type TableBodyProps<T> = {
  rows: Row<T>[];
  emptyMessage?: string;
};

export function TableBody<T>({ rows, emptyMessage = "No data available" }: TableBodyProps<T>) {
  if (rows.length === 0) {
    return (
      <tbody>
        <tr>
          <td colSpan={100} className="px-6 py-12 text-center text-gray-500">
            {emptyMessage}
          </td>
        </tr>
      </tbody>
    );
  }

  return (
    <tbody>
      {rows.map((row) => (
        <tr
          key={row.id}
          className="border-t hover:bg-gray-50 transition-colors"
        >
          {row.getVisibleCells().map((cell) => (
            <td key={cell.id} className="px-6 py-4 text-gray-700">
              {flexRender(
                cell.column.columnDef.cell,
                cell.getContext(),
              )}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}
