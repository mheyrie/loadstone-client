// components/dashboard/table/StatusBadge.tsx
type Props = {
  status: 'success' | 'pending' | 'failed' | 'active' | 'matured' | 'paid' | 'unpaid' | 'approved' | 'pending' | 'inactive' | 'completed' | 'paused';
};

export function StatusBadge({ status }: Props) {
  const styles = {
    success : 'bg-green-100 text-green-700',
    pending: 'bg-yellow-100 text-yellow-700',
    failed: 'bg-red-100 text-red-700',
    active: 'bg-blue-100 text-blue-700',
    matured: 'bg-purple-100 text-purple-700',
    paid: 'bg-green-100 text-green-700',
    unpaid: 'bg-red-100 text-red-700',
    approved: 'bg-green-100 text-green-700',
    inactive: 'bg-gray-100 text-gray-700',
    completed: 'bg-green-100 text-green-700',
    paused: 'bg-yellow-100 text-yellow-700',

  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}
