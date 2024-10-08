import className from 'classnames';
import { useRouter } from 'next/router';

type IVerticalFeatureRowProps = {
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  reverse?: boolean;
};

const CentralImagen = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'mt-2',
    'flex',
    'flex-wrap',
    'items-center',
    'justify-center',
    

    {
      'flex-row-reverse': props.reverse,
    },
  );

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full text-center sm:px-6 ">
        <h3 className="text-3xl font-semibold text-gray-900">{props.title}</h3>
        <div className=" text-xl leading-9">{props.description}</div>
      </div>

      <div className="w-full p-2 sm:w-1/2">
        <img src={`${router.basePath}${props.image}`} alt={props.imageAlt}  />
      </div>
    </div>
  );
};

export { CentralImagen };
