<script>
    import QrCodeScanner from "../../components/qrcode-scanner.svelte";
</script>
<QrCodeScanner
  detect={(e) => console.log({ type: 'DETECT', ...e })}
  error={(e) => console.log({type: 'ERROR', message: e})}
  paused={false}
  width={320}
  height={320}
  class="w-full max-w-sm"
/>