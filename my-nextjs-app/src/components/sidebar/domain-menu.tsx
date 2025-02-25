import { useDomain } from "@/hooks/use-domain";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import UploadButton from "@/components/upload-button";
import FormGenerator from "@/components/forms/form-generator";
import "@/styles/modal.css"; // Import the modal CSS

type Props = {
  min?: boolean;
  domains: { id: string; name: string; icon: string | null }[] | null | undefined;
};

const DomainMenu = ({ domains, min }: Props) => {
  const { register, onAddDomain, loading, errors, isDomain } = useDomain();
  const [showModal, setShowModal] = useState(false);

  const handleAddDomainClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className={cn("flex flex-col gap-3", min ? "mt-6" : "mt-3")}>
      {/* Header with Add Domain Button */}
      <div className="flex justify-between w-full items-center">
        {!min && <p className="text-xs text-gray-500">DOMAINS</p>}
        <PlusCircle className="cursor-pointer" size={25} onClick={handleAddDomainClick} />
      </div>

      {/* Form to add a new domain */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <form onSubmit={onAddDomain}>
              <div className="form-group">
                <label htmlFor="domain">Domain</label>
                <input
                  id="domain"
                  type="text"
                  {...register("domain")}
                  className="form-control"
                />
                {errors.domain && <p className="error">{errors.domain.message}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="icon">Icon</label>
                <UploadButton id="icon" {...register("icon")} />
                {errors.icon && <p className="error">{errors.icon.message}</p>}
              </div>
              <Button type="submit" disabled={loading}>
                {loading ? "Adding..." : "Add Domain"}
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* Render existing domains */}
      {domains && domains.length > 0 ? (
        domains.map((domain) => (
          <Link key={domain.id} href={`/domains/${domain.id}`}>
            <a className="flex items-center gap-2">
              {domain.icon && (
                <Image src={domain.icon} alt={domain.name} width={20} height={20} />
              )}
              <span>{domain.name}</span>
            </a>
          </Link>
        ))
      ) : (
        <p className="text-xs text-gray-500">No domains available</p>
      )}
    </div>
  );
};

export default DomainMenu;