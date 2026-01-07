// components/dashboard/table/StatusBadge.tsx
type Props = {
  status: 'Success' | 'Pending' | 'Failed' | 'Active' | 'Matured';
};

export function StatusBadge({ status }: Props) {
  const styles = {
    Success: 'bg-green-100 text-green-700',
    Pending: 'bg-yellow-100 text-yellow-700',
    Failed: 'bg-red-100 text-red-700',
    Active: 'bg-blue-100 text-blue-700',
    Matured: 'bg-purple-100 text-purple-700',
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}
