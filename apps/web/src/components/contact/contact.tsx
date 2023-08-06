import { SectionTitle } from '@/components/common/section-title';
import { SocialMediaItem } from './social-media-item';
import { Form } from './form';
import { PageSection } from '../common';

export function Contact() {
	return (
		<PageSection>
			<SectionTitle>Contact Me</SectionTitle>
			<div className="items-start-center mt-10 flex flex-col gap-5 lg:flex-row">
				<ul className="w-full space-y-5 lg:w-2/5">
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
		</PageSection>
	);
}
