import { Module } from '../../core/decorators/module';
import { CircularCameraProvider } from './circular.camera.provider';
import { ObjectEditorProvider } from './object.editor.provider';
import { ObjectProvider } from './object.provider';
import { PropHighlightProvider } from './prop.highlight.provider';
import { PropPlacementProvider } from './prop.placement.provider';

@Module({
    providers: [
        ObjectProvider,
        ObjectEditorProvider,
        PropPlacementProvider,
        PropHighlightProvider,
        CircularCameraProvider,
    ],
})
export class ObjectModule {}
