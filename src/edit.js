import { __ } from '@wordpress/i18n';
import './editor.scss';
import { PanelBody, TextControl, RadioControl } from '@wordpress/components'
import { RichText, useBlockProps, InspectorControls} from '@wordpress/block-editor'

export default function Edit({attributes, setAttributes }) {
	const {searchType, collection} = attributes;
	return (
		<>
			<InspectorControls>
				<PanelBody title='Search Settings'>
					<RadioControl
						label="Collection"
						help="The Collection to be used in the Carousel"
						selected={ collection }
						options={ [
							{ label: 'Adult Fiction', value: "adult+fiction"},
							{ label: 'Adult Nonfiction', value: "adult+nonfiction" },
							{ label: 'Adult Biography', value: "Adult+Biography" },
							{ label: 'Adult Fiction Romance', value: "Adult+Fiction+Romance" },
							{ label: 'Adult Fiction Western', value: "Adult+Fiction+Western" },
							{ label: 'Young Adult Fiction', value: "Young+Adult+Fiction"},
							{ label: 'Young Adult Nonfiction', value: "Young+Adult+Nonfiction"},
							{ label: 'Kids Board Book', value: "Junior+Board+Book"},
							{ label: 'Kids Picture Book', value: "Junior+Picture+Book"},
						] }
						onChange={ ( collection) => setAttributes( {collection} ) }
					/>
				</PanelBody>
			</InspectorControls>
			<p { ...useBlockProps() }>
				<TextControl
				label="Carousel Title"
				value={ attributes.title }
				onChange={ ( val ) => setAttributes( { title: val } ) }
				/>
			</p>
		</>
		
	);
}
