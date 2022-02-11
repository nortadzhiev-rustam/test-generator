import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
export default function MyEditor({ setValue, height }) {
  return (
    <>
      <Editor
        apiKey='ffe0gm2mi8gfktscd74uqm5v3l28j91kczg6aci1ie3dam5n'
        onChange={(e) => setValue(e.target.getContent())}
        init={{
          height: height || 200,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount',
          ],
          external_plugins: {
            tiny_mce_wiris:
              'https://www.wiris.net/demo/plugins/tiny_mce/plugin.js',
          },
          toolbar:
            'undo redo |' +
            'tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry |' +
            'formatselect |' +
            'bold italic underline strikethrough |' +
            'alignleft aligncenter alignright alignjustify |' +
            'bullist numlist outdent indent |' +
            'link image |' +
            'table |' +
            'removeformat |' +
            'fullscreen',

          htmlAllowedTags: ['.*'],
          htmlAllowedAttrs: ['.*'],
          draggable_modal: true,
          content_style:
            'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
        }}
      />
    </>
  );
}
