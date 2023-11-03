import { useBlockProps, RichText } from '@wordpress/block-editor';

// ...other imports

export default function save({ attributes }) {
    const blockProps = useBlockProps.save();
    return null
}
