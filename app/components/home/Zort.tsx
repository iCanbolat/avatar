
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
type Props = {}

//@ts-ignore
export function Model(props) {
  const { nodes, materials } = useGLTF('/macbook.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh geometry={nodes.abgVijaHVNRUvcc.geometry} material={materials.UpOvKwLUUXPmnPU} />
        <mesh geometry={nodes.CEvArJuvvmtQsgk.geometry} material={materials.yVmFXNTCIwNkqVT} />
        <mesh geometry={nodes.aUVveCqqwsqchVB.geometry} material={materials.yVmFXNTCIwNkqVT} />
        <mesh geometry={nodes.fiqlelggeOoTUAw.geometry} material={materials.SELuppcPLrlTpBi} />
        <mesh geometry={nodes.zlRXoydEgBQgFUa.geometry} material={materials.zqeFZcIteZtOShc} />
        <mesh geometry={nodes.YvEVHGlTGUxXlGj.geometry} material={materials.initialShadingGroup} />
        <mesh geometry={nodes.FnbkdmFKVeCCxTX.geometry} material={materials.ZpTrUizuxJQUyzW} />
        <mesh geometry={nodes.ehiyYGFzDbgxhiD.geometry} material={materials.LJSCtLIrHNHZnIH} />
        <mesh geometry={nodes.NhThIZELXlNUoIr.geometry} material={materials.mpJhsaJJZPPWMEX} />
        <mesh geometry={nodes.RYgQzNzcnFbacQH.geometry} material={materials.VfcxYmbOfnqunYx} />
        <mesh geometry={nodes.JtnJKXAEPaOoepM.geometry} material={materials.lbGSuJJwEsUTzIm} />
        <mesh geometry={nodes.WeTEPJkcTkMBwBo.geometry} material={materials.lbGSuJJwEsUTzIm} />
        <mesh geometry={nodes.yxTDdMZViYkuOKm.geometry} material={materials.BczvixNfkWQzRzZ} />
        <mesh geometry={nodes.pPCeNYAcgHQGnfB.geometry} material={materials.jRMWtdSAaujlvUA} />
        <mesh geometry={nodes.CpRxqsFibJhVZKA.geometry} material={materials.CGiumILqqSMVyeb} />
        <mesh geometry={nodes.UxiDBlCRfXiMBzT.geometry} material={materials.zWLcvvnJhbcTEtJ} />
        <mesh geometry={nodes.NgmQYtxXWDmCavo.geometry} material={materials.SKOFticEGTqECbB} />
        <mesh geometry={nodes.PSIiVLWbMOjTmDb.geometry} material={materials.SKOFticEGTqECbB} />
        <mesh geometry={nodes.RkSurqpnfNMQZfv.geometry} material={materials.zWLcvvnJhbcTEtJ} />
        <mesh geometry={nodes.YJMoQnvBNpTrgeH.geometry} material={materials.PCfVLhSpFVCvRmc} />
        <mesh geometry={nodes.KCEhahuknsxQOxv.geometry} material={materials.HpEeGHRuOqfcIZU} />
        <mesh geometry={nodes.tEHnKyDsqJuxIpz.geometry} material={materials.yVmFXNTCIwNkqVT} />
        <mesh geometry={nodes.TCGsaoyNbPKzeSS.geometry} material={materials.yVmFXNTCIwNkqVT} />
        <mesh geometry={nodes.DAuseNOrQKyrxKl.geometry} material={materials.yVmFXNTCIwNkqVT} />
        <mesh geometry={nodes.SjXIFRJFXEqYDUr.geometry} material={materials.PCfVLhSpFVCvRmc} />
        <mesh geometry={nodes.eAcvqfZlEdoxHsj.geometry} material={materials.IlNnjEDxsExlBOr} />
        <mesh geometry={nodes.gkxaPoMYYRpyVMR.geometry} material={materials.iPZiEncThgnBMJv} />
        <mesh geometry={nodes.xlRLalLTesirCGW.geometry} material={materials.hPcehRUjcLAosED} />
        <mesh geometry={nodes.ZlizOzukFeXwbga.geometry} material={materials.kOcboIDeohDRqCf} />
        <mesh geometry={nodes.wXiLpiodZWNDroe.geometry} material={materials.HPAOpCInJKBtaOC} />
        <mesh geometry={nodes.PTxrSKzcEmHVtif.geometry} material={materials.VfcxYmbOfnqunYx} />
        <mesh geometry={nodes.RjGOdbHqvxkiDns.geometry} material={materials.lbGSuJJwEsUTzIm} />
        <mesh geometry={nodes.WPFmzKypKbUYgQT.geometry} material={materials.lbGSuJJwEsUTzIm} />
        <mesh geometry={nodes.QHqPxKdexBoFnAK.geometry} material={materials.zaEqorbaeeADKgU} />
        <mesh geometry={nodes.NWErafhynAfYQEz.geometry} material={materials.pZbDFXVUkfRwjmQ} />
        <mesh geometry={nodes.tEwRkclpxjXZzil.geometry} material={materials.UPMcPXFSRXevSGt} />
        <mesh geometry={nodes.QYMcPaZnXQfyXcJ.geometry} material={materials.NQXltfOcKPZPQdI} />
        <mesh geometry={nodes.piXptsgcOfaGWrM.geometry} material={materials.WLATjirhQCUYAAG} />
        <mesh geometry={nodes.SjSNuZdtWKZRuoq.geometry} material={materials.mpJhsaJJZPPWMEX} />
        <mesh geometry={nodes.QFFLzaWPRnuQYJR.geometry} material={materials.hPcehRUjcLAosED} />
        <mesh geometry={nodes.xjTvBwZFGvSMOud.geometry} material={materials.hPcehRUjcLAosED} />
        <mesh geometry={nodes.VqfccLWHjnpnmIO.geometry} material={materials.BMKLbAPYqPmfArt} />
        <mesh geometry={nodes.mUrIWHenIQKVHcb.geometry} material={materials.BMKLbAPYqPmfArt} />
        <mesh geometry={nodes.NdRhLFCrSxRNTxn.geometry} material={materials.BMKLbAPYqPmfArt} />
        <mesh geometry={nodes.vivXPkdlqllUnrl.geometry} material={materials.XNDkEZQapqqDHpk} />
        <mesh geometry={nodes.rIsAbujsARaHSub.geometry} material={materials.jAWKNAaRBMlZYro} />
        <mesh geometry={nodes.QMBrsnrwfcVKELm.geometry} material={materials.VqwNZwmDotIMflD} />
        <mesh geometry={nodes.NqLxSKdAypgOdPC.geometry} material={materials.initialShadingGroup} />
        <mesh geometry={nodes.guoofBSjCEiTIJr.geometry} material={materials.JjuwNKnMBUdtRLb} />
        <mesh geometry={nodes.jvyJQHpRnZNPEYh.geometry} material={materials.LJSCtLIrHNHZnIH} />
      </group>
    </group>
  )
}

const Zort = (props: Props) => {
  return (
    <div>Zort</div>
  )
}

export default Zort