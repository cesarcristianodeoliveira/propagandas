import React from 'react'
import { colorDefault, colorBlueGray, colorCoolGray, colorGray, colorWarmGray, colorRed, colorOrange, colorAmber, colorYellow, colorLime, colorGreen, colorEmerald, colorTeal, colorCyan, colorSky, colorBlue, colorIndigo, colorViolet, colorPurple, colorFuchsia, colorPink, colorRose } from './Colors'

const ChangeObjStroke = ({ handleStrokeColor, activeStrokeColor }) => {
    return (
        <>
            <span className='font-medium font-sans text-sm text-truegray-500 flex w-full pb-2 border-b'>Padrão</span>
            <div className="my-3 min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
                {colorDefault.map((color, index) => (
                    <button
                        key={color.id} 
                        type='button' 
                        className={`flex items-center justify-center w-full h-10 p-3 rounded bg-${color.value} border border-truegray-200 ${activeStrokeColor === color.hex ? `ring-2 ring-offset-2 ring-${color.value}` : undefined} cursor-pointer`}
                        value={color.hex} 
                        onClick={handleStrokeColor}
                    />
                ))}
            </div>
            <span className='font-medium font-sans text-sm text-bluegray-500 flex w-full pb-2 border-b'>Cinza Azulado</span>
            <div className="my-3 min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
                {colorBlueGray.map((color, index) => (
                    <button
                        key={color.id} 
                        type='button' 
                        className={`flex items-center justify-center w-full h-10 p-3 rounded bg-${color.value} border border-truegray-200 ${activeStrokeColor === color.hex ? `ring-2 ring-offset-2 ring-${color.value}` : undefined} cursor-pointer`}
                        value={color.hex} 
                        onClick={handleStrokeColor}
                    />
                ))}
            </div>
            <span className='font-medium font-sans text-sm text-coolgray-500 flex w-full pb-2 border-b'>Cinza Legal</span>
            <div className="my-3 min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
                {colorCoolGray.map((color, index) => (
                    <button
                        key={color.id} 
                        type='button' 
                        className={`flex items-center justify-center w-full h-10 p-3 rounded bg-${color.value} border border-truegray-200 ${activeStrokeColor === color.hex ? `ring-2 ring-offset-2 ring-${color.value}` : undefined} cursor-pointer`}
                        value={color.hex} 
                        onClick={handleStrokeColor}
                    />
                ))}
            </div>
            <span className='font-medium font-sans text-sm text-gray-500 flex w-full pb-2 border-b'>Cinza</span>
            <div className="my-3 min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
                {colorGray.map((color, index) => (
                    <button
                        key={color.id} 
                        type='button' 
                        className={`flex items-center justify-center w-full h-10 p-3 rounded bg-${color.value} border border-truegray-200 ${activeStrokeColor === color.hex ? `ring-2 ring-offset-2 ring-${color.value}` : undefined} cursor-pointer`}
                        value={color.hex} 
                        onClick={handleStrokeColor}
                    />
                ))}
            </div>
            <span className='font-medium font-sans text-sm text-warmgray-500 flex w-full pb-2 border-b'>Cinza Quente</span>
            <div className="my-3 min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
                {colorWarmGray.map((color, index) => (
                    <button
                        key={color.id} 
                        type='button' 
                        className={`flex items-center justify-center w-full h-10 p-3 rounded bg-${color.value} border border-truegray-200 ${activeStrokeColor === color.hex ? `ring-2 ring-offset-2 ring-${color.value}` : undefined} cursor-pointer`}
                        value={color.hex} 
                        onClick={handleStrokeColor}
                    />
                ))}
            </div>
            <span className='font-medium font-sans text-sm text-red-500 flex w-full pb-2 border-b'>Vermelho</span>
            <div className="my-3 min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
                {colorRed.map((color, index) => (
                    <button
                        key={color.id} 
                        type='button' 
                        className={`flex items-center justify-center w-full h-10 p-3 rounded bg-${color.value} border border-truegray-200 ${activeStrokeColor === color.hex ? `ring-2 ring-offset-2 ring-${color.value}` : undefined} cursor-pointer`}
                        value={color.hex} 
                        onClick={handleStrokeColor}
                    />
                ))}
            </div>
            <span className='font-medium font-sans text-sm text-orange-500 flex w-full pb-2 border-b'>Laranja</span>
            <div className="my-3 min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
                {colorOrange.map((color, index) => (
                    <button
                        key={color.id} 
                        type='button' 
                        className={`flex items-center justify-center w-full h-10 p-3 rounded bg-${color.value} border border-truegray-200 ${activeStrokeColor === color.hex ? `ring-2 ring-offset-2 ring-${color.value}` : undefined} cursor-pointer`}
                        value={color.hex} 
                        onClick={handleStrokeColor}
                    />
                ))}
            </div>
            <span className='font-medium font-sans text-sm text-amber-500 flex w-full pb-2 border-b'>Âmbar</span>
            <div className="my-3 min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
                {colorAmber.map((color, index) => (
                    <button
                        key={color.id} 
                        type='button' 
                        className={`flex items-center justify-center w-full h-10 p-3 rounded bg-${color.value} border border-truegray-200 ${activeStrokeColor === color.hex ? `ring-2 ring-offset-2 ring-${color.value}` : undefined} cursor-pointer`}
                        value={color.hex} 
                        onClick={handleStrokeColor}
                    />
                ))}
            </div>
            <span className='font-medium font-sans text-sm text-yellow-500 flex w-full pb-2 border-b'>Amarelo</span>
            <div className="my-3 min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
                {colorYellow.map((color, index) => (
                    <button
                        key={color.id} 
                        type='button' 
                        className={`flex items-center justify-center w-full h-10 p-3 rounded bg-${color.value} border border-truegray-200 ${activeStrokeColor === color.hex ? `ring-2 ring-offset-2 ring-${color.value}` : undefined} cursor-pointer`}
                        value={color.hex} 
                        onClick={handleStrokeColor}
                    />
                ))}
            </div>
            <span className='font-medium font-sans text-sm text-lime-500 flex w-full pb-2 border-b'>Limão</span>
            <div className="my-3 min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
                {colorLime.map((color, index) => (
                    <button
                        key={color.id} 
                        type='button' 
                        className={`flex items-center justify-center w-full h-10 p-3 rounded bg-${color.value} border border-truegray-200 ${activeStrokeColor === color.hex ? `ring-2 ring-offset-2 ring-${color.value}` : undefined} cursor-pointer`}
                        value={color.hex} 
                        onClick={handleStrokeColor}
                    />
                ))}
            </div>
            <span className='font-medium font-sans text-sm text-green-500 flex w-full pb-2 border-b'>Verde</span>
            <div className="my-3 min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
                {colorGreen.map((color, index) => (
                    <button
                        key={color.id} 
                        type='button' 
                        className={`flex items-center justify-center w-full h-10 p-3 rounded bg-${color.value} border border-truegray-200 ${activeStrokeColor === color.hex ? `ring-2 ring-offset-2 ring-${color.value}` : undefined} cursor-pointer`}
                        value={color.hex} 
                        onClick={handleStrokeColor}
                    />
                ))}
            </div>
            <span className='font-medium font-sans text-sm text-emerald-500 flex w-full pb-2 border-b'>Esmeralda</span>
            <div className="my-3 min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
                {colorEmerald.map((color, index) => (
                    <button
                        key={color.id} 
                        type='button' 
                        className={`flex items-center justify-center w-full h-10 p-3 rounded bg-${color.value} border border-truegray-200 ${activeStrokeColor === color.hex ? `ring-2 ring-offset-2 ring-${color.value}` : undefined} cursor-pointer`}
                        value={color.hex} 
                        onClick={handleStrokeColor}
                    />
                ))}
            </div>
            <span className='font-medium font-sans text-sm text-teal-500 flex w-full pb-2 border-b'>Cerceta</span>
            <div className="my-3 min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
                {colorTeal.map((color, index) => (
                    <button
                        key={color.id} 
                        type='button' 
                        className={`flex items-center justify-center w-full h-10 p-3 rounded bg-${color.value} border border-truegray-200 ${activeStrokeColor === color.hex ? `ring-2 ring-offset-2 ring-${color.value}` : undefined} cursor-pointer`}
                        value={color.hex} 
                        onClick={handleStrokeColor}
                    />
                ))}
            </div>
            <span className='font-medium font-sans text-sm text-cyan-500 flex w-full pb-2 border-b'>Ciano</span>
            <div className="my-3 min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
                {colorCyan.map((color, index) => (
                    <button
                        key={color.id} 
                        type='button' 
                        className={`flex items-center justify-center w-full h-10 p-3 rounded bg-${color.value} border border-truegray-200 ${activeStrokeColor === color.hex ? `ring-2 ring-offset-2 ring-${color.value}` : undefined} cursor-pointer`}
                        value={color.hex} 
                        onClick={handleStrokeColor}
                    />
                ))}
            </div>
            <span className='font-medium font-sans text-sm text-sky-500 flex w-full pb-2 border-b'>Azul Céu</span>
            <div className="my-3 min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
                {colorSky.map((color, index) => (
                    <button
                        key={color.id} 
                        type='button' 
                        className={`flex items-center justify-center w-full h-10 p-3 rounded bg-${color.value} border border-truegray-200 ${activeStrokeColor === color.hex ? `ring-2 ring-offset-2 ring-${color.value}` : undefined} cursor-pointer`}
                        value={color.hex} 
                        onClick={handleStrokeColor}
                    />
                ))}
            </div>
            <span className='font-medium font-sans text-sm text-blue-500 flex w-full pb-2 border-b'>Azul</span>
            <div className="my-3 min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
                {colorBlue.map((color, index) => (
                    <button
                        key={color.id} 
                        type='button' 
                        className={`flex items-center justify-center w-full h-10 p-3 rounded bg-${color.value} border border-truegray-200 ${activeStrokeColor === color.hex ? `ring-2 ring-offset-2 ring-${color.value}` : undefined} cursor-pointer`}
                        value={color.hex} 
                        onClick={handleStrokeColor}
                    />
                ))}
            </div>
            <span className='font-medium font-sans text-sm text-indigo-500 flex w-full pb-2 border-b'>Indigo</span>
            <div className="my-3 min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
                {colorIndigo.map((color, index) => (
                    <button
                        key={color.id} 
                        type='button' 
                        className={`flex items-center justify-center w-full h-10 p-3 rounded bg-${color.value} border border-truegray-200 ${activeStrokeColor === color.hex ? `ring-2 ring-offset-2 ring-${color.value}` : undefined} cursor-pointer`}
                        value={color.hex} 
                        onClick={handleStrokeColor}
                    />
                ))}
            </div>
            <span className='font-medium font-sans text-sm text-violet-500 flex w-full pb-2 border-b'>Violeta</span>
            <div className="my-3 min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
                {colorViolet.map((color, index) => (
                    <button
                        key={color.id} 
                        type='button' 
                        className={`flex items-center justify-center w-full h-10 p-3 rounded bg-${color.value} border border-truegray-200 ${activeStrokeColor === color.hex ? `ring-2 ring-offset-2 ring-${color.value}` : undefined} cursor-pointer`}
                        value={color.hex} 
                        onClick={handleStrokeColor}
                    />
                ))}
            </div>
            <span className='font-medium font-sans text-sm text-purple-500 flex w-full pb-2 border-b'>Púrpura</span>
            <div className="my-3 min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
                {colorPurple.map((color, index) => (
                    <button
                        key={color.id} 
                        type='button' 
                        className={`flex items-center justify-center w-full h-10 p-3 rounded bg-${color.value} border border-truegray-200 ${activeStrokeColor === color.hex ? `ring-2 ring-offset-2 ring-${color.value}` : undefined} cursor-pointer`}
                        value={color.hex} 
                        onClick={handleStrokeColor}
                    />
                ))}
            </div>
            <span className='font-medium font-sans text-sm text-fuchsia-500 flex w-full pb-2 border-b'>Fúcsia</span>
            <div className="my-3 min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
                {colorFuchsia.map((color, index) => (
                    <button
                        key={color.id} 
                        type='button' 
                        className={`flex items-center justify-center w-full h-10 p-3 rounded bg-${color.value} border border-truegray-200 ${activeStrokeColor === color.hex ? `ring-2 ring-offset-2 ring-${color.value}` : undefined} cursor-pointer`}
                        value={color.hex} 
                        onClick={handleStrokeColor}
                    />
                ))}
            </div>
            <span className='font-medium font-sans text-sm text-pink-500 flex w-full pb-2 border-b'>Pink</span>
            <div className="my-3 min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
                {colorPink.map((color, index) => (
                    <button
                        key={color.id} 
                        type='button' 
                        className={`flex items-center justify-center w-full h-10 p-3 rounded bg-${color.value} border border-truegray-200 ${activeStrokeColor === color.hex ? `ring-2 ring-offset-2 ring-${color.value}` : undefined} cursor-pointer`}
                        value={color.hex} 
                        onClick={handleStrokeColor}
                    />
                ))}
            </div>
            <span className='font-medium font-sans text-sm text-rose-500 flex w-full pb-2 border-b'>Rosa</span>
            <div className="my-3 min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
                {colorRose.map((color, index) => (
                    <button
                        key={color.id} 
                        type='button' 
                        className={`flex items-center justify-center w-full h-10 p-3 rounded bg-${color.value} border border-truegray-200 ${activeStrokeColor === color.hex ? `ring-2 ring-offset-2 ring-${color.value}` : undefined} cursor-pointer`}
                        value={color.hex} 
                        onClick={handleStrokeColor}
                    />
                ))}
            </div>
        </>
    )
}

export default ChangeObjStroke