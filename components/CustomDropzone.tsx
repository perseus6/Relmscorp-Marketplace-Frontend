import React, { useCallback, useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';

interface Props {
  acceptType: string | string[];
  setFile: any;
  defaultRes?: {
    type?: number;
    link?: string;
  };
  disabled?: boolean;
  title: string;
}

const CustomDropzone = (props: Props): JSX.Element => {
  const { title, acceptType, setFile, defaultRes, disabled = false } = props;

  const [fileType, setFileType] = useState(defaultRes?.type || 0);

  const useDisplayImage = () => {
    const [result, setResult] = useState<string | ArrayBuffer>('');

    const uploader = (e) => {
      const imageFile = e;

      const reader = new FileReader();
      reader.addEventListener('load', (e) => {
        setResult(e.target.result);
      });

      reader.readAsDataURL(imageFile);
    };

    return { result, uploader };
  };

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      uploader(file);
    });
  }, []); //eslint-disable-line

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    accept: acceptType,
  });

  const { result, uploader } = useDisplayImage();

  useEffect(() => {
    if (acceptedFiles.length > 0) {
      let type = 0;
      if (acceptedFiles[0].type.indexOf('image') !== -1) {
        type = 0;
      } else if (acceptedFiles[0].type.indexOf('video') !== -1) {
        type = 1;
      } else if (acceptedFiles[0].type.indexOf('audio') !== -1) {
        type = 2;
      }

      setFileType(type);
      setFile(acceptedFiles[0], type);
    }
  }, [acceptedFiles]); //eslint-disable-line

  useEffect(() => {
    setFileType(props.defaultRes?.type || 0);
  }, [props.defaultRes]);

  const inputProps = disabled ? {} : getInputProps();
  const rootProps = disabled ? {} : getRootProps();

  return (
    <div className='flex flex-col gap-3'>
      <p className='pl-3'>{title}</p>
      <div
        {...rootProps}
        className='max-w-full w-80 aspect-square overflow-hidden p-1 relative'
      >
        <input {...inputProps} />
        <div className='absolute z-10 w-full h-full left-0 top-0 bg-card-background' />
        {fileType === 0 ? (
          <img
            src={result.toString() || '/img_error.png'}
            alt='placeholder'
            className='h-full w-full object-contain relative z-20 duration-200'
          />
        ) : (
          <video src={result.toString()} width='100%' autoPlay loop muted />
        )}
      </div>
    </div>
  );
};

export default CustomDropzone;
