import { useRouter } from "next/router";
export default function ContactId() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <p>Номер страницы: {id}</p>
    </div>
  );
}

   

