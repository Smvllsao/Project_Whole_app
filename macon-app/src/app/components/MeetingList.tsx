// src/components/MeetingList.tsx
export default function MeetingList() {
  // Lista fake - vou editar depois
  const reunioes = [
    { id: 1, titulo: "qualquer coisa", data: "07/07/25", hora: "20:00:00" },
    { id: 2, titulo: "qualquer coisa", data: "07/07/25", hora: "20:00:00" },
    { id: 3, titulo: "qualquer coisa", data: "07/07/25", hora: "20:00:00" },
  ];
  return (
    <ul className="space-y-2">
      {reunioes.map((reuniao) => (
        <li key={reuniao.id} className="bg-white p-4 rounded shadow-sm">
          <div className="font-medium">{reuniao.titulo}</div>
          <div className="text-sm text-gray-600">
            {reuniao.data} às {reuniao.hora}
          </div>
        </li>
      ))}
    </ul>
  );
}
