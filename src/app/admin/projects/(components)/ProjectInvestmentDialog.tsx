import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ProjectWithInvestmentsAndUsers } from '@/interfaces/project.interface';
import { IoMdEye } from 'react-icons/io';

interface Props {
  project: ProjectWithInvestmentsAndUsers;
}
export function ProjectInvesmentDialog({ project }: Props) {
  const investments = project.Investment;
  return (
    <Dialog>
      <DialogTrigger className="w-[100%] h-[100%] flex justify-center items-center justify-center" asChild>
        <button className="m-auto" disabled={investments.length === 0}>
          <span className="mr-2">{investments.length} </span>
          {investments.length > 0 && <IoMdEye size={16} />}
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-[1200px] min-w-[800px]">
        <DialogHeader>
          <DialogTitle>Inversiones Proyecto #{project.projectId}</DialogTitle>
        </DialogHeader>
        <div className=" py-4">
          <div className="grid grid-cols-[1fr_2fr_4fr_1fr_1fr] gap-4 pb-2 mb-2 border-b-2 border-b-slate-300">
            <p>Id</p>
            <p>Inversionista</p>
            <p>Correo</p>
            <p>Estatus</p>
            <p>Monto</p>
          </div>
          {investments.map((investment) => (
            <div key={investment.investmentId} className="grid grid-cols-[1fr_2fr_4fr_1fr_1fr] gap-4">
              <p>{investment.investmentId}</p>
              <p>{investment.user.name}</p>
              <p>{investment.user.email}</p>
              <p>{investment.transaction_status}</p>
              <p>{investment.amount.toLocaleString()} COP</p>
            </div>
          ))}
        </div>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
