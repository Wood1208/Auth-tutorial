"use client";

import { useCurrentRole } from "@/hooks/use-current.role";
import { UserRole } from "@prisma/client";
import { FormError } from "@/components/form-error";

interface RoleGateProps {
  children: React.ReactNode;
  allowRole: UserRole;
}

export const RoleGate = ({
  children,
  allowRole,
}: RoleGateProps) => {
  const role = useCurrentRole();

  if(role !== allowRole) {
    return (
      <FormError message="You do not have permission to view this content!" />
    )
  }

  return (
    <>
      {children}
    </>
  )
}