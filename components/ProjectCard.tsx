import styled from 'styled-components';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { EntryCollection } from 'contentful';

import { IProjectFields } from '../src/schema/generated/contentful';

const Card = styled.div`
	background: #3a3f51;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: #fcfcfc;
	border: 3px solid #e31b6d;
	border-radius: 5px;
	overflow: hidden;
	width: 90%;
	height: 800px;

	@media (min-width: 900px) {
		& {
			width: 40%;
		}
	}
`;

const CardInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	padding: 20px;
	text-align: center;
	border-top: 3px solid #04c2c9;
	background: #1b242f;
	padding: 10px;
	gap: 10px;

	@media (min-width: 800px) {
		& {
			padding: 20px;
		}
	}
`;

const ThumbnailImage = styled.img`
	background-position: center;
	background-size: cover;
	overflow: hidden;
`;

const Tags = styled.p`
	background: #3a3f51;
	padding: 2px 10px;
`;

const ButtonContainer = styled.div`
	display: flex;
	align-items: center;
	margin-top: 15px;
	gap: 10px;
`;

const ButtonLink = styled.a`
	padding: 5px 10px;
	cursor: pointer;

	&.blue {
		background: #04c2c9;
	}

	&.pink {
		background: #e31b6d;
	}
`;

const TagsContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-wrap: wrap;
	gap: 5px;
`;

interface Props {
	projects: EntryCollection<IProjectFields>;
}

const ProjectCard: React.FC<Props> = ({ projects }) => {
	return (
		<>
			{projects &&
				projects.items.map((project, i) => (
					<Card key={i}>
						<ThumbnailImage
							src={project.fields.thumbnail.fields.file.url}
							alt="alt text from contentful soon as well"
						/>
						<CardInfo>
							<h2>{project.fields.title}</h2>
							<TagsContainer>
								{project.fields.packages &&
									project.fields.packages.map((item, i) => (
										<Tags key={i}>{item}</Tags>
									))}
							</TagsContainer>
							{documentToReactComponents(project.fields.description)}
							<ButtonContainer>
								{project.fields.liveDemo && (
									<ButtonLink
										target="blank"
										rel="noopener noreferrer"
										href={project.fields.liveDemo}
										className="blue"
									>
										Live Demo
									</ButtonLink>
								)}
								<ButtonLink
									target="blank"
									rel="noopener noreferrer"
									href={project.fields.githubLink}
									className="pink"
								>
									Code Repo
								</ButtonLink>
							</ButtonContainer>
						</CardInfo>
					</Card>
				))}
		</>
	);
};

export default ProjectCard;
