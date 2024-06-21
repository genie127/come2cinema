import Subbanner from '../../components/Subbanner'
import Header from '../../components/Header'
import '../Movie.css'

const Contact=()=>{

		const kakao =()=>{
            return (
                <Map
                center={{ lat: 33.5563, lng: 126.79581 }}
                style={{ width: "100%", height: "360px" }}
                >
                <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
                    <div style={{color:"#000"}}>Hello World!</div>
                </MapMarker>
                </Map>
            )
        }

    return(
        <>
        <Subbanner title={'고객센터'} text={'무엇이든 물어보세요.'} pageName={'sub_customer'}/>
        <div class="content_wrap">
            <div class="content_header">
                <div class="container_fix clearfix">
                    <h3 class="content_tt">찾아오시는 길</h3>
               </div>
            </div>
            <div class="content_body">
                <div class="container_fix">
                    <div class="kakao_map">
                    </div>
                    <div class="contact_wrap">
                        <div class="contact_con">
                            <h5 class="cont_tt">Come 2 Cinema</h5>
                            <p>인천 남동구 인주대로 593 엔타스 12층</p>
                        </div>
                        <div class="contact_con subway">
                            <h5 class="subway_line">인천1</h5>
                            <p>예술회관역 2번출구 직진 보도 1분</p>
                        </div>
                        <div class="contact_con">
                            <h5 class="cont_tt">Contact Us</h5>
                            <p>032) 000-0000</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content_tail">
            </div>
            <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=ef055bee3ff1f514471d133a0c1c12b7"></ script>

        </div>
        </>
    )
}

export default Contact