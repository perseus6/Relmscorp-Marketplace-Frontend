import { useState } from 'react';
import CustomInput from 'components/CustomInput';
import CustomTextArea from 'components/CustomTextArea';
import CustomDropzone from 'components/CustomDropzone';
import CustomButton from 'components/CustomButton';

const CreateCollection = (): JSX.Element => {
  const [file, setFile] = useState<any>();
  const [bannerFile, setBannerFile] = useState<any>();

  return (
    <div className='flex flex-col gap-5 w-3/5 items-center mx-auto py-20'>
      <h1 className='font-semibold text-3xl pb-8'>Create a New Collection</h1>
      <div className='flex justify-around w-full'>
        <CustomDropzone
          title='Logo Image'
          acceptType='image/*'
          setFile={setFile}
        />
        <CustomDropzone
          title='Banner Image'
          acceptType='image/*'
          setFile={setBannerFile}
        />
      </div>

      <CustomInput title='Name' placeholder='Name' />
      <CustomInput title='Symbol' placeholder='Symbol' />
      <CustomTextArea title='Description' placeholder='Description' />
      <CustomInput title='External Link' placeholder='External Link' />
      <CustomButton classNames='py-3 mt-3 w-full'>Create</CustomButton>
    </div>
  );
};

export default CreateCollection;
