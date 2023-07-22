import { forwardRef } from 'react';
import { SectionTitle } from '@/components/common/section-title';
import { SocialMediaItem } from './social-media-item';
import { Form } from './form';

export const Contact = forwardRef<HTMLDivElement>(function Contact(props, ref) {
	return (
		<section className="m-sm lg:m-lg" id="contact" ref={ref}>
			<SectionTitle>Contact</SectionTitle>
			<div className="flex flex-col mt-10 gap-5 items-start-center lg:flex-row">
				<ul className="w-full lg:w-2/5 space-y-5">
					<SocialMediaItem
						name="LinkedIn"
						nickname="diegoreyescabrera"
						link="https://www.linkedin.com/in/diegoreyescabrera/"
					/>
					<SocialMediaItem
						name="Github"
						nickname="realDiegoR"
						link="https://github.com/realDiegoR"
					/>
					<SocialMediaItem
						name="Instagram"
						nickname="realdiegor"
						link="https://instagram.com/realdiegor"
					/>
				</ul>
				<Form />
			</div>
		</section>
	);
});