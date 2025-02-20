import { Module } from '../../../core/decorators/module';
import { LSMCCheckHealthProvider } from './lsmc.check.health.provider';
import { LSMCDamageProvider } from './lsmc.damage.provider';
import { LSMCDeathProvider } from './lsmc.death.provider';
import { LsmcHalloweenProvider } from './lsmc.halloween.provider';
import { LSMCItemProvider } from './lsmc.item.provider';
import { LSMCPharmacyProvider } from './lsmc.pharmacy.provider';
import { LSMCPlasterProvider } from './lsmc.plaster.provider';
import { LSMCProvider } from './lsmc.provider';

@Module({
    providers: [
        LSMCCheckHealthProvider,
        LSMCPharmacyProvider,
        LsmcHalloweenProvider,
        LSMCDeathProvider,
        LSMCProvider,
        LSMCItemProvider,
        LSMCDamageProvider,
        LSMCPlasterProvider,
    ],
})
export class LSMCModule {}
