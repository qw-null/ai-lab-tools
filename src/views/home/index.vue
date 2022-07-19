<template>
  <div>
    <intel-tool />
    <research-share />
    <industry-apply />
  </div>
</template>

<script>
import IntelTool from "@/views/home/components/IntelTool";
import ResearchShare from "@/views/home/components/ResearchShare";
import IndustryApply from "@/views/home/components/IndustryApply";

export default {
  components: { IndustryApply, ResearchShare, IntelTool },
};
</script>

<style scoped></style>
