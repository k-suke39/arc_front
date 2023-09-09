import { useEffect, useRef } from 'react';
import { basicSetup } from 'codemirror';
import { EditorState } from '@codemirror/state';
import { EditorView } from '@codemirror/view';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';

export default function CodeEditor() {
	const editorRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!editorRef.current) return;

		const state = EditorState.create({
			doc: 'Welcome to Arc👋',
			extensions: [
				basicSetup,
				javascript(),
				oneDark,
				EditorView.baseTheme({
					'&': {
						height: '445px',
						width: '590px',
					},
				}),
			],
		});

		const view = new EditorView({
			state,
			parent: editorRef.current,
		});

		return () => {
			view.destroy();
		};
	}, []);

	return <div ref={editorRef} className="editor" />;
}
