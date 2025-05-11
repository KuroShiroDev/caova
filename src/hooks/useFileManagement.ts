import { useState, useCallback } from 'react';

type FileType = 'media' | 'documents';

interface UseFileManagementProps {
  initialFiles?: File[];
  type?: FileType;
}

interface UseFileManagementReturn {
  files: File[];
  handleRemoveFile: (index: number) => void;
  handleAttachFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
  resetFiles: () => void;
  getFilesByType: (type: string) => File[];
}

export const useFileManagement = ({
  initialFiles = [],
  // type = 'media',
}: UseFileManagementProps = {}): UseFileManagementReturn => {
  const [files, setFiles] = useState<File[]>(initialFiles);

  const handleRemoveFile = useCallback((index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const handleAttachFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;

    const selectedFiles = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...selectedFiles]);

    // Reset the input value to allow selecting the same file again
    e.target.value = '';
  }, []);

  const resetFiles = useCallback(() => {
    setFiles([]);
  }, []);

  const getFilesByType = useCallback(
    (fileType: string) => {
      return files.filter((file) => {
        if (fileType === 'media') {
          return file.type.startsWith('image/') || file.type.startsWith('video/');
        } else if (fileType === 'documents') {
          return !file.type.startsWith('image/') && !file.type.startsWith('video/');
        }
        return true;
      });
    },
    [files]
  );

  return {
    files,
    handleRemoveFile,
    handleAttachFile,
    resetFiles,
    getFilesByType,
  };
};
