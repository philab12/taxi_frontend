<template>
    <div>
        <SideBarComp/>
        <NavBarComp/>
        <div class="content-wrap">
            <div class="main">
                <div class="container-fluid">
                    <HeaderComp page="Dashboard" pageDesc="visual display of all of your data"/>
                    
                    <section id="main-content" class="mb-5">
                        <div class="row">
                            <div class="col-12">
                                <h6 class="text-center">Site Stats</h6>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-3">
                                <div class="card">
                                    <div class="stat-widget-one">
                                        <div class="stat-icon dib"><i class="fa-solid fa-users color-info border-info"></i>
                                        </div>
                                        <div class="stat-content dib">
                                            <div class="stat-text">Active Users</div>
                                            <div class="stat-digit">1,012</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="card">
                                    <div class="stat-widget-one">
                                        <div class="stat-icon dib"><i class="fa-solid fa-id-card color-primary border-primary"></i>
                                        </div>
                                        <div class="stat-content dib">
                                            <div class="stat-text">Active Drivers</div>
                                            <div class="stat-digit">961</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="card">
                                    <div class="stat-widget-one">
                                        <div class="stat-icon dib"><i class="fa-solid fa-map color-pink border-pink"></i>
                                        </div>
                                        <div class="stat-content dib">
                                            <div class="stat-text">Service Areas</div>
                                            <div class="stat-digit">770</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="card">
                                    <div class="stat-widget-one">
                                        <div class="stat-icon dib"><i class="fa-solid fa-file-lines color-danger border-danger"></i></div>
                                        <div class="stat-content dib">
                                            <div class="stat-text">Expiring  Docs</div>
                                            <div class="stat-digit">2,781</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="card">
                                    <div class="stat-widget-one">
                                        <div class="stat-icon dib"><i class="fa-solid fa-hand-holding-dollar color-success border-success"></i></div>
                                        <div class="stat-content dib">
                                            <div class="stat-text">Total Earnings</div>
                                            <div class="stat-digit">2,781</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="card">
                                    <div class="stat-widget-one">
                                        <div class="stat-icon dib"><i class="fa-solid fa-tag color-warning border-warning"></i></div>
                                        <div class="stat-content dib">
                                            <div class="stat-text">Total Discounts</div>
                                            <div class="stat-digit">2,781</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    <section id="main-content" class="mt-5">
                        <div class="row">
                            <div class="col-12">
                                <h6 class="text-center">Taxi Stats</h6>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-3">
                                <div class="card">
                                    <div class="stat-widget-one">
                                        <div class="stat-icon dib"><i class="fa-solid fa-car-side color-info border-info"></i>
                                        </div>
                                        <div class="stat-content dib">
                                            <div class="stat-text">Total Rides</div>
                                            <div class="stat-digit">1,012</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="card">
                                    <div class="stat-widget-one">
                                        <div class="stat-icon dib"><i class="fa-solid fa-car color-primary border-primary"></i>
                                        </div>
                                        <div class="stat-content dib">
                                            <div class="stat-text">Ongoing Rides</div>
                                            <div class="stat-digit">961</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="card">
                                    <div class="stat-widget-one">
                                        <div class="stat-icon dib"><i class="fa-solid fa-ban color-danger border-danger"></i>
                                        </div>
                                        <div class="stat-content dib">
                                            <div class="stat-text">Cancelled Rides</div>
                                            <div class="stat-digit">770</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="card">
                                    <div class="stat-widget-one">
                                        <div class="stat-icon dib"><i class="fa-solid fa-check color-success border-success"></i></div>
                                        <div class="stat-content dib">
                                            <div class="stat-text">Completed</div>
                                            <div class="stat-digit">2,781</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="card">
                                    <div class="stat-widget-one">
                                        <div class="stat-icon dib"><i class="fa-solid fa-ban color-pink border-pink"></i></div>
                                        <div class="stat-content dib">
                                            <div class="stat-text">Auto-Cancelled</div>
                                            <div class="stat-digit">2,781</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="card">
                                    <div class="stat-widget-one">
                                        <div class="stat-icon dib"><i class="fa-solid fa-hand-holding-dollar color-success border-success"></i></div>
                                        <div class="stat-content dib">
                                            <div class="stat-text">Total Earnings</div>
                                            <div class="stat-digit">2,781</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="card">
                                    <div class="stat-widget-one">
                                        <div class="stat-icon dib"><i class="fa-solid fa-tag color-warning border-warning"></i></div>
                                        <div class="stat-content dib">
                                            <div class="stat-text">Total Discount</div>
                                            <div class="stat-digit">2,781</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <FooterComp/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import HeaderComp from "@/components/admin/HeaderComp.vue"
import FooterComp from "@/components/admin/FooterComp.vue"
import SideBarComp from "@/components/admin/SideBarComp.vue"
import NavBarComp from "@/components/admin/NavBarComp.vue"

export default {
    name: "DashboardView",
    data:  function() {
    },
    components: {
        HeaderComp,
        FooterComp,
        SideBarComp,
        NavBarComp
    },
    props: {
  }
};
</script>

<style>
@import "@/admin_style.css";

.modal-dialog{
   top:100px;
}

/* route transitions */
.effect-enter-active, .effect-leave-active {
  transition: 0.3s
}

.effect-leave-to {
  opacity: 0;
}

.effect-enter-from {
  opacity: 0;
}
</style>