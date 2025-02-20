import { emitRpc } from '@public/core/rpc';
import { CraftsList } from '@public/shared/craft/craft';
import { JobType } from '@public/shared/job';
import { RpcServerEvent } from '@public/shared/rpc';

import { Once, OnceStep, OnEvent, OnNuiEvent } from '../../../core/decorators/event';
import { Inject } from '../../../core/decorators/injectable';
import { Provider } from '../../../core/decorators/provider';
import { ClientEvent, NuiEvent } from '../../../shared/event';
import { MenuType } from '../../../shared/nui/menu';
import { BlipFactory } from '../../blip';
import { NuiMenu } from '../../nui/nui.menu';
import { PlayerService } from '../../player/player.service';
import { TargetFactory } from '../../target/target.factory';

@Provider()
export class BaunProvider {
    @Inject(BlipFactory)
    private blipFactory: BlipFactory;

    @Inject(PlayerService)
    private playerService: PlayerService;

    @Inject(NuiMenu)
    private nuiMenu: NuiMenu;

    @Inject(TargetFactory)
    private targetFactory: TargetFactory;

    private state = {
        displayLiquorBlip: false,
        displayFlavorBlip: false,
        displayFurnitureBlip: false,
        displayResellBlip: false,
        displaySnackBlip: false,
    };

    @Once(OnceStep.PlayerLoaded)
    public setupBaunBlips() {
        this.createBlips();
    }

    @OnNuiEvent(NuiEvent.BaunDisplayBlip)
    public async onDisplayBlip({ blip, value }: { blip: string; value: boolean }) {
        this.state[blip] = value;
        this.blipFactory.hide(blip, !value);
    }

    @OnEvent(ClientEvent.JOBS_BAUN_OPEN_SOCIETY_MENU)
    public async onOpenSocietyMenu() {
        if (this.nuiMenu.getOpened() === MenuType.BahamaUnicornJobMenu) {
            this.nuiMenu.closeMenu();

            return;
        }

        const crafting = await emitRpc<CraftsList>(RpcServerEvent.CRAFT_GET_RECIPES, JobType.Baun);
        this.nuiMenu.openMenu(MenuType.BahamaUnicornJobMenu, {
            recipes: crafting.categories,
            state: this.state,
            onDuty: this.playerService.isOnDuty(),
        });
    }

    private createBlips() {
        this.blipFactory.create('displayLiquorBlip', {
            name: "Point de récolte d'alcools",
            coords: { x: 1410.96, y: 1147.6, z: 114.33 },
            sprite: 478,
            color: 28,
            scale: 0.9,
        });
        this.blipFactory.hide('displayLiquorBlip', true);

        this.blipFactory.create('displayFlavorBlip', {
            name: 'Point de récolte de saveurs',
            coords: { x: 867.17, y: -1628.59, z: 30.2 },
            sprite: 478,
            color: 28,
            scale: 0.9,
        });
        this.blipFactory.hide('displayFlavorBlip', true);

        this.blipFactory.create('displayFurnitureBlip', {
            name: 'Point de récolte de fournitures',
            coords: { x: 44.98, y: -1749.42, z: 29.59 },
            sprite: 478,
            color: 28,
            scale: 0.9,
        });
        this.blipFactory.hide('displayFurnitureBlip', true);

        this.blipFactory.create('displaySnackBlip', {
            name: 'Point de récolte de snacks',
            coords: { x: -753.6, y: -2571.93, z: 13.9 },
            sprite: 478,
            color: 28,
            scale: 0.9,
        });
        this.blipFactory.hide('displaySnackBlip', true);

        this.blipFactory.create('displayResellBlip', {
            name: 'Point de vente des cocktails',
            coords: { x: 393.02, y: 177.3, z: 103.86 },
            sprite: 478,
            color: 28,
            scale: 0.9,
        });
        this.blipFactory.hide('displayResellBlip', true);

        this.blipFactory.create('jobs:baun:bahama', {
            name: 'Bahama Unicorn',
            position: [-1393.49, -598.06, 0],
            sprite: 806,
            scale: 0.9,
        });

        this.blipFactory.create('jobs:baun:unicorn', {
            name: 'Bahama Unicorn',
            position: [127.57, -1288.96, 0],
            sprite: 806,
            scale: 0.9,
        });

        this.blipFactory.create('jobs:baun:yellowjack', {
            name: 'Bahama Unicorn',
            position: [1987.18, 3049.03, 0],
            sprite: 806,
            scale: 0.9,
        });
    }
}
