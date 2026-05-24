import { useNavigate } from "react-router";

export default function UserFooter() {
  const navigate = useNavigate();
  return (
    <div className='px-2 py-3 text-center bg-[var(--secondary-bg)]'>
      ©2026 <strong className="cursor-pointer" onClick={() => navigate('/')}>Istapio</strong>. High-end career facilitator for the modern workforce.
    </div>
  )
}
