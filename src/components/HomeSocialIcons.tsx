
// HomeSocialIcons.tsx

import { SocialIcon } from "react-social-icons";



function HomeSocialIcons({ className = "" }: { readonly className?: string }) {


    return <div className={`flex gap-4 social-icons ${className}`}>

        <SocialIcon url='https://www.instagram.com/vladistev9/' className='social-icon' />
        <SocialIcon url='https://www.linkedin.com/in/krstevski-vlad/' className='social-icon' />
        <SocialIcon url='https://github.com/vladk-based/' className='social-icon' />
    </div>;

};


export default HomeSocialIcons;
